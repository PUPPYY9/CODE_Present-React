from flask import Flask, request
import numpy as np
import pydicom
from PIL import Image
from flask_cors import CORS
import base64
app = Flask(__name__)
CORS(app)


def B64():
    with open("./image/change.jpg", "rb") as image_file:
        encoded_string = base64.b64encode(
            image_file.read())  # เอารูปมาแปลงโดยใช้ base64
    return encoded_string


@app.route('/api')
def JPG():
    name = './Image-100.dcm'
    im = pydicom.dcmread(name)
    im = im.pixel_array.astype(float)
    rescaled_image = (np.maximum(im, 0)/im.max())*255
    final_image = np.uint8(rescaled_image)
    final_image = Image.fromarray(final_image)
    print(final_image)
    final_image.save('./image/change.jpg')
    return B64()


if __name__ == "__main__":
    app.run(debug=True)
