import styles from './Profile.module.css';
import { loginYet } from '../../util/loginyet';

const Profile = () => {
  loginYet(); 

  const dataName = localStorage.getItem('SetUserName');
  const emailData = localStorage.getItem('setLoginUserEmail');

  const name = dataName ? JSON.parse(dataName) : '';
  const email = emailData ? JSON.parse(emailData) : '';

  return (
    <div className={`${styles.profileContainer} ${styles.height}`}>
      <div className={styles.profileSidebar}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
          className={styles.avatar}
        />
        <h3 style={{ color: '#D86A15' }}>{name}</h3>
        <p>{email}</p>
      </div>

      <div className={styles.profileForm}>
        <h2>Profile Settings</h2>
        <form className={styles.Profile_Input}>
          <div className={styles.formGroup}>
            <input type="text" value={name} placeholder="First Name" />
          </div>
          <input type="text" placeholder="Mobile Number" />
          <input type="email" value={email} placeholder="Email ID" />
          <button type="submit" className={styles.btnSubmit}>
            Save Profile
          </button>
        </form>
      </div>

      <div className={styles.profileExperience}>
        <h2> Experience watching movies</h2>
        <input type="text" placeholder="Experience movies" />
        <input type="text" placeholder="Experience shows" />
        <button className={styles.btnSubmit}>Experience</button>
      </div>
    </div>
  );
};

export default Profile;
