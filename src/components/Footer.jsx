const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#032541] text-base-content">
      <div className="container text-white items-start px-4 sm:px-6 lg:px-8 mx-auto flex justify-between">
        <aside>
          <img src="/footer.svg" alt="Logo" width={130} height={94} />
          <button className="btn btn-primary mt-10">JOIN THE COMMUNITY</button>
        </aside>
        <nav className="flex flex-col text-left gap-2">
          <h6 className="footer-title">THE BASICS</h6>
          <a className="link link-hover">About TMDB</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Support Forums</a>
          <a className="link link-hover">API</a>
          <a className="link link-hover">System Status</a>
        </nav>
        <nav className="flex flex-col text-left gap-2">
          <h6 className="footer-title">GET INVOLVED</h6>
          <a className="link link-hover">Contribution Bible</a>
          <a className="link link-hover">Add New Movie</a>
          <a className="link link-hover">Add New TV Show</a>
        </nav>
        <nav className="flex flex-col text-left gap-2">
          <h6 className="footer-title">COMMUNITY</h6>
          <a className="link link-hover">Guidelines</a>
          <a className="link link-hover">Discussions</a>
          <a className="link link-hover">Leaderboard</a>
        </nav>
        <nav className="flex flex-col text-left gap-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">API Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">DMCA policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
