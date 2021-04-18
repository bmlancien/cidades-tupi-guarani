"use strict";

// close onboarding
let closeOnboarding = document.getElementById("js-close-onboarding");
let onboardingModal = document.getElementById("js-onboarding-modal");
let onboardingCTA = document.getElementById("js-onboarding-cta");

function closeOnboardingModal() {
  onboardingModal.style.display = "none";
}

closeOnboarding.onclick = closeOnboardingModal;
onboardingCTA.onclick = closeOnboardingModal;

window.onclick = function(e) {
  if (e.target == onboardingModal) {
    closeOnboardingModal();
  }
}