import React from "react";
import { Row, Col, Card } from 'antd';
import BreadcrumbComon from '../BreadcrumbComon';
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";


class ImageCrop extends React.Component {
  state = {
    src: null,
    crop: {
      unit: "%",
      width: 30,
      aspect: 16 / 9
    }
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="gutter-example">
        <BreadcrumbComon first="组件" second="图片裁切" />
        <Row gutter={16}>
            <Col className="gutter-row" md={24}>
              <div className="gutter-box">
              <Card bordered={false}>
                <div>
                <span className="file">选择文件
                <input type="file" onChange={this.onSelectFile} />
                </span>
                </div>
              {src && (
                <ReactCrop
                  src={src}
                  crop={crop}
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                  onChange={this.onCropChange}
                />
              )}
              {croppedImageUrl && (
                <div>
                <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
                </div>
              )}
              <style>{`
                .file {
                  position: relative;
                  display: inline-block;
                  background: #D0EEFF;
                  border: 1px solid #99D3F5;
                  border-radius: 4px;
                  padding: 4px 12px;
                  overflow: hidden;
                  color: #1E88C7;
                  text-decoration: none;
                  text-indent: 0;
                  line-height: 20px;
              }
              .file input {
                  position: absolute;
                  font-size: 100px;
                  right: 0;
                  top: 0;
                  opacity: 0;
              }
              .file:hover {
                  background: #AADFFD;
                  border-color: #78C3F3;
                  color: #004974;
                  text-decoration: none;
              }
              `}</style>
            </Card>
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ImageCrop