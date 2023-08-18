document.getElementById("submitBtn").addEventListener("click", function () {
    check();
    console.log("isSubmit:" + isSubmit);

    if (isSubmit === "true") {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://175.45.194.93/report/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        
        var data = {
            "name": username,
            "relation": realationship,
            "victim_id": userID,
            "date": date,
            "type": type
        };

        if (type === "type-etc") {
            data.etc = etc;
        }

        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                console.log("통신 코드 성공");
                console.log("realationship:" + realationship);
                console.log("userID:" + userID);
                console.log("date:" + date);
                console.log("type:" + type);
                if (type === "type-etc") {
                    console.log("etc:" + etc);
                }
                alert("신고접수 되었습니다.");
            } else {
                console.error("Request failed with status:", xhr.status);
            }
        };

        xhr.onerror = function () {
            console.error("Request failed");
        };

        xhr.send(JSON.stringify(data));
    } else {
        console.log("isSubmit:" + isSubmit + "상태이므로 오류");
    }
});
