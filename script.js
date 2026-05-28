function analyzeIdea() {

  const idea = document.getElementById("ideaInput").value;

  if (idea.trim() === "") {
    alert("Please enter a business idea.");
    return;
  }

  const trendOptions = [
    "Very High",
    "High",
    "Moderate",
    "Explosive Growth"
  ];

  const growthOptions = [
    "Rapidly Rising",
    "Strong Long-Term Growth",
    "Stable Expansion",
    "Future Unicorn Potential"
  ];

  const competitionOptions = [
    "Low",
    "Medium",
    "High",
    "Emerging Market"
  ];

  const marketOptions = [
    "Africa, India",
    "United States, Europe",
    "Global Demand",
    "Asia, Africa"
  ];

  const moneyOptions = [
    "Extremely Strong",
    "High Revenue Potential",
    "Subscription Friendly",
    "Enterprise Ready"
  ];

  const outlookOptions = [
    "Very Promising",
    "Future Industry Leader",
    "High Investor Interest",
    "Massive Scalability"
  ];

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  document.getElementById("trendStrength").innerText =
    randomItem(trendOptions);

  document.getElementById("growthPrediction").innerText =
    randomItem(growthOptions);

  document.getElementById("competitionLevel").innerText =
    randomItem(competitionOptions);

  document.getElementById("bestMarkets").innerText =
    randomItem(marketOptions);

  document.getElementById("monetizationPotential").innerText =
    randomItem(moneyOptions);

  document.getElementById("futureOutlook").innerText =
    randomItem(outlookOptions);

  createChart();
}

function createChart() {

  const ctx = document.getElementById("trendChart");

  new Chart(ctx, {
    type: 'line',

    data: {
      labels: [
        '2026',
        '2027',
        '2028',
        '2029',
        '2030'
      ],

      datasets: [{
        label: 'Predicted Market Growth',

        data: [
          20,
          40,
          65,
          85,
          100
        ],

        borderWidth: 3,
        tension: 0.4
      }]
    },

    options: {
      responsive: true
    }
  });
}
