/**
 * It returns a string of HTML that contains a Bootstrap spinner
 * @returns A string of HTML.
 */
export default function showSpinner() {
  return `<div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>`;
}
