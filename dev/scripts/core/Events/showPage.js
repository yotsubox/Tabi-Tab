export async function showPage() {
  //let shit load correctly (img need sometime to load)
  await new Promise((resolve) =>
    setTimeout(() => {
      document.querySelector("#loading-section").remove();
      document.querySelector("#page").classList.remove("--collapse");
      document.body.classList.remove("--overflow-hidden");
      resolve();
    }, 1200)
  );
}
