import { getBgColor, getColorByType } from './utils';

const theme = {
  lightBlue: 'blue',
  gray: 'gray'
};

describe('Button => utils', () => {
  it('should return the right color if has the passed type mapped', () => {
    const props = {
      type: 'primary'
    };

    expect(getColorByType({ ...props, theme })).toEqual(theme.lightBlue);
  });

  it('should return the right color if has the passed type mapped', () => {
    const props = {
      type: 'secondary'
    };

    expect(getColorByType({ ...props, theme })).toEqual(theme.gray);
  });

  it(`should return the default color if haven't the passed type mapped`, () => {
    const props = {
      type: 'anytype'
    };

    expect(getColorByType({ ...props, theme })).toEqual(theme.lightBlue);
  });

  it(`should return transparent if is bordered`, () => {
    const props = { type: 'anytype', bordered: true };

    expect(getBgColor({ ...props, theme })).toEqual('transparent');
  });

  it(`should return the right color if has the passed type mapped and isn't bordered`, () => {
    const props = { type: 'anytype', bordered: false };

    expect(getBgColor({ ...props, theme })).toEqual(theme.lightBlue);
  });
});
