import styles from './Profile.module.css';

const Profile = () => {

    return (
        <div className={`${styles.profileContainer}`}>
            <div className={styles.profileSidebar}>
                <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="avatar"
                    className={styles.avatar}
                />
                <h3 style={{ color: '#D86A15' }}>edogaru</h3>
                <p>edogaru@mail.com.my</p>
            </div>

            <div className={`${styles.profileForm}`}>
                <h2>Profile Settings</h2>
                <form>
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Surname" />
                    </div>
                    <input type="text" placeholder="Mobile Number" />
                    <input type="text" placeholder="Address Line 1" />
                    <input type="text" placeholder="Address Line 2" />
                    <input type="text" placeholder="Postcode" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Area" />
                    <input type="email" placeholder="Email ID" />
                    <input type="text" placeholder="Education" />
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="Country" />
                        <input type="text" placeholder="State/Region" />
                    </div>
                    <button type="submit" className={styles.btnSubmit}>Save Profile</button>
                </form>
            </div>

            <div className={`${styles.profileExperience}`}>
                <h2>Edit Experience</h2>
                <input type="text" placeholder="Experience in Designing" />
                <input type="text" placeholder="Additional Details" />
                <button className={styles.btnSubmit}>Experience</button>
            </div>
        </div>
    );
};

export default Profile;
