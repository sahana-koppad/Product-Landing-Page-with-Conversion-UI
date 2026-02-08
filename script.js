let selectedPlan = null;
let selectedPrice = 0;

function selectPlan(plan, price, element) {
  selectedPlan = plan;
  selectedPrice = price;

  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('selected');
  });

  element.classList.add('selected');

  document.getElementById('summary').innerText =
    `Selected Plan: ${plan} | Price: ₹${price}/month`;
}

function handleCTA() {
  if (!selectedPlan) {
    alert("Please select a plan to continue");
    return;
  }

  alert(
    `You selected the ${selectedPlan} plan.\nPrice: ₹${selectedPrice}/month`
  );
}

function toggleFeatures() {
  document.getElementById('features').classList.toggle('hidden');
}

/* Scroll animation */
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  const trigger = window.innerHeight - 100;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < trigger) {
      card.classList.add('show');
    }
  });
});
