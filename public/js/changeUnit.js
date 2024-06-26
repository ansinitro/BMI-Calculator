const unitDropdown = document.getElementById('unit');
const heightUnitSpan = document.getElementById('heightUnitSpan');
const weightUnitSpan = document.getElementById('weightUnitSpan');

unitDropdown.addEventListener('change', function() {
  const selectedUnit = unitDropdown.value;
  if (selectedUnit === 'metric') {
    heightUnitSpan.textContent = 'cm';
    weightUnitSpan.textContent = 'kg';
  } else if (selectedUnit === 'imperial') {
    heightUnitSpan.textContent = 'in';
    weightUnitSpan.textContent = 'lbs';
  }
});