import { ArrowUpwardOutlined } from "@mui/icons-material";
import "./Scrollup.css";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    //  when the scrolling is above 560 viewport Height, add the show_scroll className to the scrollup element
    if (this.scrollY >= 560) scrollUp.classList.add("show_scroll");
    else scrollUp.classList.remove("show_scroll");
  });
  return (
    <a href="#home" className="scrollup">
      <div className="scrollup_icon">
        <ArrowUpwardOutlined />
      </div>
    </a>
  );
};

export default Scrollup;
