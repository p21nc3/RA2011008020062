@app.route('/trains', methods=['GET'])
def get_trains():

    # 1. Define the time window for the next 12 hours
    now = datetime.now()
    next_12_hours = now + timedelta(hours=12)
    payload = {
        "start_time": now.strftime("%Y-%m-%dT%H:%M:%S"),
        "end_time": next_12_hours.strftime("%Y-%m-%dT%H:%M:%S")
    }

     # 2. Set up the headers for the request
    headers = {
        "Authorization": f"Bearer {AUTH_TOKEN}"
    }

     # 3. Make the request to the external API
    response = requests.get(f"{BASE_URL}/trains", params=payload, headers=headers)

    if response.status_code == 200:
        trains = [{
    "trainName": "Chennai Exp",
    
        
            "trainNumber": "2344",
            "departureTime": 
                {
                "Hours": 21,
                "Minutes": 35,
                "Seconds": 0
                }
            ,
            "seatsAvailable": {
                "sleeper": 3,
                "AC": 1
            },
            "price": {
                "sleeper": 2,
                "AC": 5
            },
        },]

         # 4. Filter the trains based on the departure time and create a simplified list
        filtered_trains = [
            {
                "trainNumber": train['trainNumber'],
                "trainName": train['trainName'],
                "departureTime": datetime(
                    year=now.year,
                    month=now.month,
                    day=now.day,
                    hour=train['departureTime']['Hours'],
                    minute=train['departureTime']['Minutes'],
                    second=0,
                    microsecond=0
                ).strftime("%Y-%m-%dT%H:%M:%S"),
                "seatsAvailable": train['seatsAvailable'],
                "price": train['price']
            }
            for train in trains
            if datetime(
                year=now.year,
                month=now.month,
                day=now.day,
                hour=train['departureTime']['Hours'],
                minute=train['departureTime']['Minutes'],
                second=0,
                microsecond=0
            ) > now + timedelta(minutes=30)
        ]

        # 5. Sort the filtered trains based on price, seats available, and departure time
        sorted_trains = sorted(
            filtered_trains,
            key=lambda train: (
                train['price']['AC'],
                -train['seatsAvailable']['AC'],
                train['departureTime']
            ),
            reverse=True
        )

        return jsonify(sorted_trains)
    
     # 6. Handle any errors with the request
    return jsonify({"message": "Error fetching train data"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)