import PropTypes from 'prop-types';


function HostProfile({ host }) {
  return (
    <div className="HostProfil">
      <div className="Name">
        <p className="host-name">{host.name.split(" ")[0]}</p>
        <p className="host-surname">{host.name.split(" ")[1]}</p>
      </div>
      <img
        src={host.picture}
        alt={host.name}
        className="host-picture"
      />
    </div>
  );
}

HostProfile.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default HostProfile;
