function SocialLinks() {
    return (
        <>
            <div className="social-links">
                <a href="mailto:ankithr005@gmail.com">
                    <img src="images/email-favicon.ico" alt="Email" />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/avulaankith" target="_blank" rel="noreferrer">
                    <img src="images/linkedin-favicon.ico" alt="LinkedIn" />
                    LinkedIn
                </a>
                {/* <a href="https://leetcode.com/ankithavula" target="_blank" rel="noreferrer">
                    <img src="images/leetcode-favicon.ico" alt="LeetCode" />
                    LeetCode
                </a> */}
                <a href="https://github.com/avulaankith" target="_blank" rel="noreferrer">
                    <img src="images/github-favicon.ico" alt="GitHub" />
                    GitHub
                </a>
            </div>
        </>
    );
}

export default SocialLinks;
