export function Battle() {
  return (
    <div id="battle-wrapper">
      <div className="block">
        <div className="input-wrapper">
          <input className="name-input" type="text" placeholder="name" />
        </div>
        <div className="input-wrapper">
          <input className="initiative-input" type="text" placeholder="initiative roll" />
        </div>
      </div>
      <button className="add-block-button"></button>
    </div>
  );
}
