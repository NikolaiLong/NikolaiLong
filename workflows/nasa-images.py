import requests
import os
import xml.etree.ElementTree as ET

FEED_URL = "https://www.nasa.gov/feeds/iotd-feed/"
DATA_DIR = "assets/feeds"
IMAGES_DIR = "assets/images/nasa-images"

def main():
    # Ensure directories
    os.makedirs(IMAGES_DIR, exist_ok=True)

    # Fetch RSS feed
    response = requests.get(FEED_URL)
    response.raise_for_status()
    rss_content = response.text

    # Parse XML
    root = ET.fromstring(rss_content)

    items = root.findall('./channel/item')

    # Clear old images
    for filename in os.listdir(IMAGES_DIR):
        os.remove(os.path.join(IMAGES_DIR, filename))

    # Retrieve images and update XML
    counter = 1
    for item in items:
        enclosure = item.find('enclosure')
        if enclosure is not None:
            image_url = enclosure.get('url')
            if image_url:
                # Determine file extension
                ext = os.path.splitext(image_url)[1]
                local_filename = f"image_{counter}{ext}"

                # Download the image
                img_response = requests.get(image_url)
                img_response.raise_for_status()

                with open(os.path.join(IMAGES_DIR, local_filename), 'wb') as f:
                    f.write(img_response.content)

                # Update the enclosure url to the local path
                enclosure.set('url', f"assets/images/nasa-images/{local_filename}")
                counter += 1

    # Write updated XML back out to data/nasa.xml
    tree = ET.ElementTree(root)
    tree.write(os.path.join(DATA_DIR, "nasa-images.xml"), encoding="utf-8", xml_declaration=True)

if __name__ == "__main__":
    main()
