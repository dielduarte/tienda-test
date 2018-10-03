import React from 'react';
import { withHandlers, withState, lifecycle, compose } from 'recompose';
import { func, array, oneOf, string, node } from 'prop-types';

import { Row } from '../Flex';
import { Container, Label, DashedContainer, Icon } from './Ui';

export const openFileSearch = props => () => {
  props.uploadInputRef.current.click();
};

export const onUploadFinished = (props, image) => {
  const { setPhotos, photos, onUploadSuccess } = props;
  const newPhotos = [...photos, image];

  setPhotos(newPhotos);
  onUploadSuccess(newPhotos);
};

export const uploadPhoto = (Reader, cb) => props => () => {
  const file = props.uploadInputRef.current.files[0];

  Reader.addEventListener('load', () => cb(props, Reader.result));

  if (file) {
    Reader.readAsDataURL(file);
  }
};

export function renderPhotos(photos) {
  return photos.map((photo, key) => (
    <DashedContainer key={key}>
      <img src={photo} />
    </DashedContainer>
  ));
}

function PhotoUpload({
  label,
  openFileSearch,
  uploadInputRef,
  uploadPhoto,
  photos
}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Row wrap="true">
        {renderPhotos(photos)}
        <DashedContainer onClick={openFileSearch} withHover>
          <input type="file" ref={uploadInputRef} onChange={uploadPhoto} />
          <Icon icon="camera" />
        </DashedContainer>
      </Row>
    </Container>
  );
}

PhotoUpload.propsType = {
  label: string.isRequired,
  openFileSearch: func.isRequired,
  uploadInputRef: oneOf([string, node]).isRequired,
  uploadPhoto: func.isRequired,
  photos: array.isRequired,
  onUploadSuccess: func.isRequired
};

export default compose(
  withState('uploadInputRef', 'setUploadInputRef', null),
  withState('photos', 'setPhotos', []),
  lifecycle({
    componentDidMount() {
      this.props.setUploadInputRef(React.createRef());
    }
  }),
  withHandlers({
    openFileSearch,
    uploadPhoto: uploadPhoto(new FileReader(), onUploadFinished)
  })
)(PhotoUpload);
