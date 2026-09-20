#!/usr/bin/env python3
"""Soften SDOH hi-fi / wireframe / hero wordmarks without touching container strokes."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "public/images/case-studies/sdoh-health-platform"

# Full-bleed onboarding / login headers (normalized box).
FULL_BLEED_LOGO_BOX = (0.028, 0.028, 0.220, 0.095)

# Sidebar wordmark on full-width mockups (X from image width; Y from detected anchor).
SIDEBAR_X0_FRAC = 0.030
SIDEBAR_X1_FRAC = 0.182
SIDEBAR_Y_OFFSET_FRAC = 0.003
SIDEBAR_LOGO_HEIGHT_FRAC = 0.038
WIREFRAME_ANCHOR_Y_FRAC = 0.041  # grayscale wireframes (no teal sidebar)
HERO_MOCKUP_WIDTH_FRAC = 0.53

FULL_BLEED_BASENAMES = {
    "login.png",
    "mobile-sign-in.png",
    "create-profile.png",
    "upload-documents.png",
    "change-password.png",
}

BLUR_RADIUS = 28
BLUR_PASSES = 2
BLUR_AMOUNT = 0.90
HERO_BLUR_RADIUS = 32
HERO_BLUR_PASSES = 2
HERO_BLUR_AMOUNT = 0.90
MASK_INSET_PX = 3
MASK_CORNER_RADIUS = 0

SKIP = {
    "design-process.png",
    "hero-card.png",
    "hero-dashboard.png",
    "persona-jennifer.png",
    "wireframes.png",
    "mobile-wireframes.png",
    "wireframe-dashboard.png",
    "wireframe-patient-snapshot.png",
    "wireframe-patients.png",
    "wireframe-sdoh-form.png",
    # Reference asset — already has the target treatment
    "schedule-appointments.png",
}


def should_process(path: Path) -> bool:
    return path.suffix.lower() == ".png" and path.name not in SKIP


def _is_full_bleed(name: str) -> bool:
    base = name[3:] if name.startswith("wf-") else name
    return base in FULL_BLEED_BASENAMES


def _box_pixels(
    size: tuple[int, int], box: tuple[float, float, float, float]
) -> tuple[int, int, int, int]:
    w, h = size
    x0 = max(0, int(box[0] * w))
    y0 = max(0, int(box[1] * h))
    x1 = min(w, int(box[2] * w))
    y1 = min(h, int(box[3] * h))
    return x0, y0, x1, y1


def _is_sidebar_teal(r: int, g: int, b: int) -> bool:
    return g > 175 and r < 200 and b < 220 and g > r + 8


def _is_logo_pixel(r: int, g: int, b: int) -> bool:
    if r < 130 and g < 130 and b < 130:
        return True
    return g > 100 and r > 80 and b < 100 and g >= r


def _hero_logo_box_pixels(im: Image.Image) -> tuple[int, int, int, int]:
    w, h = im.size
    x_left, y_top = _hero_mockup_anchor(im)
    mock_w = int(HERO_MOCKUP_WIDTH_FRAC * w)
    rgb = im.convert("RGB")
    xs: list[int] = []
    ys: list[int] = []
    y_lo = y_top + int(0.050 * mock_w)
    y_hi = y_top + int(0.088 * mock_w)
    x_scan = int(0.28 * mock_w)
    for y in range(y_lo, min(h, y_hi)):
        for x in range(x_left + 8, min(w, x_left + x_scan)):
            if _is_logo_pixel(*rgb.getpixel((x, y))):
                xs.append(x)
                ys.append(y)
    if xs:
        pad_x, pad_y = 8, 5
        return (
            max(x_left + 10, min(xs) - pad_x),
            max(y_top, min(ys) - pad_y),
            min(w, max(xs) + pad_x + 1),
            min(h, max(ys) + pad_y + 1),
        )
    x0 = x_left + int(0.14 * mock_w)
    x1 = x_left + int(0.25 * mock_w)
    y0 = y_top + int(0.055 * mock_w)
    y1 = y0 + int(SIDEBAR_LOGO_HEIGHT_FRAC * mock_w)
    return x0, y0, x1, min(y1, h)


def _hero_mockup_anchor(im: Image.Image) -> tuple[int, int]:
    """Top-left of the dashboard mockup embedded on hero.png."""
    w, h = im.size
    rgb = im.convert("RGB")
    ymax = int(0.22 * h)
    xmax = int(0.35 * w)
    min_y = ymax
    for y in range(ymax):
        for x in range(xmax):
            if _is_sidebar_teal(*rgb.getpixel((x, y))):
                min_y = min(min_y, y)
    if min_y >= ymax:
        return int(0.084 * w), int(0.118 * h)
    y_top = min_y
    x_left = min(
        x
        for x in range(xmax)
        for y in range(y_top, min(ymax, y_top + 8))
        if _is_sidebar_teal(*rgb.getpixel((x, y)))
    )
    return x_left, y_top


def _sidebar_anchor(im: Image.Image, filename: str) -> tuple[int, int]:
    """Top-left anchor for the wordmark (y is first sidebar / header row)."""
    w, h = im.size
    rgb = im.convert("RGB")
    x_probe = int(0.08 * w)

    limit = max(32, int(h * 0.12))
    for y in range(limit):
        r, g, b = rgb.getpixel((x_probe, y))
        if _is_sidebar_teal(r, g, b):
            return x_probe, y

    if filename.startswith("wf-"):
        return x_probe, int(WIREFRAME_ANCHOR_Y_FRAC * w)

    return x_probe, int(WIREFRAME_ANCHOR_Y_FRAC * w)


def _sidebar_logo_box_pixels(im: Image.Image, filename: str) -> tuple[int, int, int, int]:
    w, h = im.size
    if filename == "hero.png":
        return _hero_logo_box_pixels(im)

    x_left, y_top = _sidebar_anchor(im, filename)
    x0 = int(SIDEBAR_X0_FRAC * w)
    x1 = int(SIDEBAR_X1_FRAC * w)
    y0 = y_top + max(2, int(SIDEBAR_Y_OFFSET_FRAC * w))
    y1 = y_top + int(SIDEBAR_LOGO_HEIGHT_FRAC * w)
    return x0, y0, x1, min(y1, h)


def _soft_mask(size: tuple[int, int]) -> Image.Image:
    w, h = size
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    inset = MASK_INSET_PX
    draw.rounded_rectangle(
        (inset, inset, w - inset - 1, h - inset - 1),
        radius=MASK_CORNER_RADIUS,
        fill=255,
    )
    return mask.filter(ImageFilter.GaussianBlur(radius=1))


def _gaussian_stack(region: Image.Image, radius: int, passes: int) -> Image.Image:
    out = region
    for _ in range(max(1, passes)):
        out = out.filter(ImageFilter.GaussianBlur(radius=radius))
    return out


def _sidebar_fill_color(region: Image.Image) -> tuple[int, int, int]:
    """Sidebar teal from the crop border (avoids averaging logo pixels)."""
    rgb = region.convert("RGB")
    w, h = region.size
    edge: list[tuple[int, int, int]] = []
    for x in range(w):
        edge.append(rgb.getpixel((x, 0)))
        if h > 1:
            edge.append(rgb.getpixel((x, h - 1)))
    for y in range(1, max(1, h - 1)):
        edge.append(rgb.getpixel((0, y)))
        if w > 1:
            edge.append(rgb.getpixel((w - 1, y)))
    r = sum(p[0] for p in edge) // len(edge)
    g = sum(p[1] for p in edge) // len(edge)
    b = sum(p[2] for p in edge) // len(edge)
    return (r, g, b)


def _privacy_obscure(
    region: Image.Image, radius: int, passes: int, fill_blend: float = 0.82
) -> Image.Image:
    """Destroy letterforms (pixelate + blur + teal frost), like schedule-appointments."""
    w, h = region.size
    rw, rh = max(6, w // 10), max(3, h // 8)
    blocky = region.resize((rw, rh), Image.Resampling.BOX).resize(
        (w, h), Image.Resampling.NEAREST
    )
    blurred = _gaussian_stack(blocky, radius, passes)
    fill = Image.new("RGB", (w, h), _sidebar_fill_color(region))
    frosted = Image.blend(blurred.convert("RGB"), fill, fill_blend)
    return frosted.convert("RGBA")


def soften_logo(path: Path) -> None:
    im = Image.open(path).convert("RGBA")
    if _is_full_bleed(path.name):
        x0, y0, x1, y1 = _box_pixels(im.size, FULL_BLEED_LOGO_BOX)
    else:
        x0, y0, x1, y1 = _sidebar_logo_box_pixels(im, path.name)
    if x1 - x0 < 8 or y1 - y0 < 8:
        return

    region = im.crop((x0, y0, x1, y1))
    if path.name == "hero.png":
        radius, passes, amount = HERO_BLUR_RADIUS, HERO_BLUR_PASSES, HERO_BLUR_AMOUNT
    else:
        radius, passes, amount = BLUR_RADIUS, BLUR_PASSES, BLUR_AMOUNT
    obscured = _privacy_obscure(region, radius, passes)
    # 90% full frost; 10% lighter frost (never sharp source — keeps text unreadable).
    fill = Image.new("RGB", region.size, _sidebar_fill_color(region))
    light_frost = Image.blend(
        obscured.convert("RGB"), fill, 0.35
    ).convert("RGBA")
    softened = Image.blend(obscured, light_frost, 1.0 - amount)
    mask = _soft_mask(region.size)
    merged = Image.composite(softened, region, mask)
    im.paste(merged, (x0, y0))
    im.save(path, optimize=True)


def main() -> None:
    for path in sorted(IMG_DIR.glob("*.png")):
        if not should_process(path):
            continue
        soften_logo(path)
        print("logo soften", path.name)


if __name__ == "__main__":
    main()
