import PropTypes from 'prop-types';

const RenderName = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

RenderName.propTypes = {
  name: PropTypes.string,
};

RenderName.defaultProps = {
  name: 'Devon',
};

export default RenderName;
