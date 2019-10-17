const classAdd = () => {
  dropdownElem.classList.toggle('d-flex');
  dropdownBtn.classList.toggle('transform-none');
}

dropdownBtn.addEventListener('click', classAdd );