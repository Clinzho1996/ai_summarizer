import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/Clinzho1996")}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Say goodbye to lengthy articles and complex texts! Our app specializes
        in summarizing content into concise and simpler forms, making it easier
        for you to grasp the key points and save valuable time.
      </h2>
    </header>
  );
};

export default Hero;
