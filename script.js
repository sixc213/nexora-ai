
  function analyzeIdea() {

  const input = document
    .getElementById("ideaInput")
    .value
    .toLowerCase()
    .trim();

  const result = trendDatabase[input];

  if (result) {

    document.getElementById("trendStrength").innerText =
      result.trend;

    document.getElementById("growthPrediction").innerText =
      result.growth;

    document.getElementById("competitionLevel").innerText =
      result.competition;

    document.getElementById("bestMarkets").innerText =
      result.market;

    document.getElementById("monetizationPotential").innerText =
      result.monetization;

    document.getElementById("futureOutlook").innerText =
      result.outlook;

  } else {

    document.getElementById("trendStrength").innerText =
      "Emerging Opportunity";

    document.getElementById("growthPrediction").innerText =
      "Moderate Growth";

    document.getElementById("competitionLevel").innerText =
      "Unknown";

    document.getElementById("bestMarkets").innerText =
      "Analyzing";

    document.getElementById("monetizationPotential").innerText =
      "Potential Detected";

    document.getElementById("futureOutlook").innerText =
      "Needs More Data";
  }

  createChart();
}

function createChart() {

  const ctx = document.getElementById("trendChart");

  new Chart(ctx, {
    type: "line",

    data: {
      labels: [
        "2026",
        "2027",
        "2028",
        "2029",
        "2030"
      ],

      datasets: [{
        label: "Predicted Market Growth",
        data: [20, 40, 65, 85, 100],
        borderWidth: 3,
        tension: 0.4
      }]
    },

    options: {
      responsive: true
    }
  });
}
