import os
import requests
from PIL import Image
from io import BytesIO

images = [
    ('public/images/hero/hero-car.jpg', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70'),
    ('public/images/tinting/tint-1.jpg', 'https://images.unsplash.com/photo-1555215695-3004980ad54e'),
    ('public/images/tinting/tint-2.jpg', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7'),
    ('public/images/tinting/tint-3.jpg', 'https://images.unsplash.com/photo-1502877338535-766e1452684a'),
    ('public/images/ceramic/ceramic-1.jpg', 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341'),
    ('public/images/ceramic/ceramic-2.jpg', 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d'),
    ('public/images/ceramic/ceramic-3.jpg', 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8'),
    ('public/images/detailing/detailing-1.jpg', 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9'),
    ('public/images/detailing/detailing-2.jpg', 'https://images.unsplash.com/photo-1489824904134-891ab64532f1'),
    ('public/images/detailing/detailing-3.jpg', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70'),
    ('public/images/residential/residential-1.jpg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'),
    ('public/images/residential/residential-2.jpg', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d'),
    ('public/images/residential/residential-3.jpg', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'),
    ('public/images/commercial/commercial-1.jpg', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'),
    ('public/images/commercial/commercial-2.jpg', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72'),
    ('public/images/commercial/commercial-3.jpg', 'https://images.unsplash.com/photo-1497366412874-3415097a27e7'),
    ('public/images/contact/contact-bg.jpg', 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c'),
    ('public/images/footer/footer-bg.jpg', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'),
    ('public/images/testimonials/testimonial-bg.jpg', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70'),
]

for path, url in images:
    print('Downloading', url, '->', path)
    response = requests.get(url, params={'auto': 'format', 'fit': 'crop', 'w': '2000', 'q': '80'}, timeout=30)
    response.raise_for_status()
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'wb') as f:
        f.write(response.content)
    img = Image.open(BytesIO(response.content)).convert('RGB')
    webp_path = os.path.splitext(path)[0] + '.webp'
    img.save(webp_path, 'WEBP', quality=80, method=6)
    print('Saved', webp_path)
