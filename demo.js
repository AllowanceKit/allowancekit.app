"use strict";
(() => {
  const get = id => document.getElementById(`demo-${id}`);
  const phone = document.getElementById("app-demo");
  let added = false;
  let child = false;

  function render() {
    get("parent").setAttribute("aria-pressed", String(!child));
    get("child").setAttribute("aria-pressed", String(child));
    get("title").textContent = child ? "Hi, Lily!" : "AllowanceKit";
    get("max").hidden = child;
    get("deposit").hidden = child;
    get("goal").hidden = !child;
    get("balance").textContent = added ? "$52.50" : "$47.50";
    get("save").textContent = get("goal-amount").textContent = added ? "$28.50" : "$23.50";
    get("progress").style.width = added ? "28.5%" : "23.5%";
    get("add").disabled = added;
    get("add").textContent = added ? "Bonus added ✓" : "Add $5 bonus";
    get("message").textContent = child
      ? added ? "Your bonus is in Save. You’re $5 closer to your bike!" : "Lily can check her money here. Switch to Parent view to add a bonus."
      : added ? "$5 added to Lily’s Save bucket. Switch to Lily’s view to see her progress." : "Try it: add a bonus, then see it in Lily’s view.";
  }

  get("add").addEventListener("click", () => { added = true; render(); });
  get("parent").addEventListener("click", () => { child = false; render(); });
  get("child").addEventListener("click", () => { child = true; render(); });
  get("reset").addEventListener("click", () => { added = false; child = false; render(); });
  phone.classList.add("demo-ready");
  phone.setAttribute("role", "region");
  phone.setAttribute("aria-label", "Interactive AllowanceKit preview with sample data");
  get("views").hidden = false;
  get("controls").hidden = false;
  get("fallback").hidden = true;
  render();
})();
