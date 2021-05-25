const Loading = () => (
  <div className="spinner-container">
    <div className="center"></div>

    <div className="inner-spin">
      <div className="inner-arc inner-arc_start-a"></div>
      <div className="inner-arc inner-arc_end-a"></div>

      <div className="inner-arc inner-arc_start-b"></div>
      <div className="inner-arc inner-arc_end-b"></div>

      <div className="inner-moon-a"></div>
      <div className="inner-moon-b"></div>
    </div>

    <div className="outer-spin">
      <div className="outer-arc outer-arc_start-a"></div>
      <div className="outer-arc outer-arc_end-a"></div>

      <div className="outer-arc outer-arc_start-b"></div>
      <div className="outer-arc outer-arc_end-b"></div>

      <div className="outer-moon-a"></div>
      <div className="outer-moon-b"></div>
    </div>
  </div>
);

export default Loading;
