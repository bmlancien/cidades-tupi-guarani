"use strict";

// close onboarding
let closeOnboarding = document.getElementById("js-close-onboarding");
let onboardingModal = document.getElementById("js-onboarding-modal");

function closeOnboardingModal() {
  onboardingModal.style.display = "none";
}

closeOnboarding.onclick = closeOnboardingModal;

window.onclick = function(e) {
  if (e.target == onboardingModal) {
    closeOnboardingModal();
  }
}