import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import '../../config/fontAwesome';

import PhotoUpload, {
  openFileSearch,
  onUploadFinished,
  uploadPhoto,
  renderPhotos
} from './PhotoUpload';

describe('PhotoUpload', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <PhotoUpload
        label="label teste"
        onUploadSuccess={photos => console.log(photos)}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the click event of the ref element', () => {
    const props = {
      uploadInputRef: {
        current: { click: jest.fn() }
      }
    };

    openFileSearch(props)();
    expect(props.uploadInputRef.current.click).toHaveBeenCalled();
  });

  it('should call setPhotos and onUploadSuccess props passing the new photos array', () => {
    const props = {
      setPhotos: jest.fn(),
      photos: ['cdn.nuvem.com/image1.example.jpg'],
      onUploadSuccess: jest.fn()
    };

    const newImage = 'cdn.nuvem.com/image2.example.jpg';

    const newPhotosArray = [...props.photos, newImage];

    onUploadFinished(props, newImage);
    expect(props.setPhotos).toHaveBeenCalledWith(newPhotosArray);
    expect(props.onUploadSuccess).toHaveBeenCalledWith(newPhotosArray);
  });

  it('should render the photo list', () => {
    const photoList = [
      'https://cdn.nuvem.com/image1.png',
      'https://cdn.nuvem.com/image2.png'
    ];

    let wrapper = shallow(
      <PhotoUpload
        label="label teste"
        onUploadSuccess={photos => console.log(photos)}
      />
    ).dive();

    wrapper.props().setPhotos(photoList);
    expect(wrapper).toMatchSnapshot();

    wrapper = renderPhotos(photoList);
    expect(wrapper).toMatchSnapshot();
  });

  it('should upload the photo and call the callback function passing the image', () => {
    const file = 'fakefile.png';

    const props = {
      uploadInputRef: {
        current: {
          files: [file]
        }
      }
    };

    const onUploadFinished = jest.fn();
    const eventMap = {};

    const FileReader = {
      readAsDataURL: jest.fn(() => eventMap['load']()),
      addEventListener: (type, cb) => {
        eventMap[type] = cb;
      },
      result: file
    };

    uploadPhoto(FileReader, onUploadFinished)(props)();

    expect(FileReader.readAsDataURL).toHaveBeenCalledWith(file);
    expect(onUploadFinished).toHaveBeenCalledWith(props, file);
  });

  it(`should not call the callback function if haven't image`, () => {
    const file = null;

    const props = {
      uploadInputRef: {
        current: {
          files: [file]
        }
      }
    };

    const onUploadFinished = jest.fn();
    const eventMap = {};

    const FileReader = {
      readAsDataURL: jest.fn(() => eventMap['load']()),
      addEventListener: (type, cb) => {
        eventMap[type] = cb;
      },
      result: file
    };

    uploadPhoto(FileReader, onUploadFinished)(props)();

    expect(FileReader.readAsDataURL).not.toHaveBeenCalledWith(file);
    expect(onUploadFinished).not.toHaveBeenCalledWith(props, file);
  });
});
