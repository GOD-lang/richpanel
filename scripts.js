document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("next-button");
    
    nextButton.addEventListener("click", function() {
      const planType = document.getElementById("plan-type").value;
      if (planType === "monthly") {
        // Redirect to monthly pricing page
        window.location.href = "monthly_pricing.html";
      } else if (planType === "yearly") {
        // Redirect to yearly pricing page
        window.location.href = "yearly_pricing.html";
      }
    });
  });
  