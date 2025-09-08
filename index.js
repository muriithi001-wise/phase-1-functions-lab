// index.js

// Function to calculate the number of blocks from Scuber's HQ (42nd Street)
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

// Function to calculate the distance from Scuber's HQ in feet
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Function to calculate the distance travelled in feet between start and destination
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate the fare price based on start and destination
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; // Free for first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // No rides over 2500 feet
  }
}
      
