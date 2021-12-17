const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/v4/priority-list', function (req, res) {
    var repairEmergency = req.session.data['repair-emergency'];
    switch (repairEmergency) {
        case undefined:
            res.redirect('/v4/priority-list-error');
            break;
            case "gas":
            res.redirect('/v4/smell-gas');
            break;
            case "heating":
            res.redirect('/v4/emergency');
            break;
            case "water":
            res.redirect('/v4/emergency');
            break;
            case "electricity":
            res.redirect('/v4/emergency');
            break;
            case "leak":
            res.redirect('/v4/emergency');
            break;
            case "security":
            res.redirect('/v4/emergency');
            break;
            case "wiring":
            res.redirect('/v4/emergency');
            break;
            case "carbon-monoxide":
            res.redirect('/v4/emergency');
            break;
            case "non-emergency":
            res.redirect('/v4/communal-or-private-property');
            break;
    };
});

router.post('/v4/priority-list-error', function (req, res) {
    var repairEmergency = req.session.data['repair-emergency'];
    switch (repairEmergency) {
        case undefined:
            res.redirect('/v4/priority-list-error');
            break;
            case "gas":
            res.redirect('/v4/smell-gas');
            break;
            case "heating":
            res.redirect('/v4/emergency');
            break;
            case "water":
            res.redirect('/v4/emergency');
            break;
            case "electricity":
            res.redirect('/v4/emergency');
            break;
            case "leak":
            res.redirect('/v4/emergency');
            break;
            case "security":
            res.redirect('/v4/emergency');
            break;
            case "wiring":
            res.redirect('/v4/emergency');
            break;
            case "carbon-monoxide":
            res.redirect('/v4/emergency');
            break;
            case "non-emergency":
            res.redirect('/v4/communal-or-private-property');
            break;
    };
});

router.post("/v4/communal-or-private-property", function(req, res) {
  if (req.session.data["communal"] === "yes") {
    res.redirect("/v4/not-eligible-communal-repairs");
  } else {
    res.redirect("/v4/postcode")
  }
});

router.post("/v4/resident-type", function(req, res) {
  if (req.session.data["resident"] === "yes") {
    res.redirect("/v4/not-eligible");
  } else {
    res.redirect("/v4/postcode")
  }
});

router.post('/v4/repair-location', function (req, res) {
    var repairLocation = req.session.data['repair-location'];
    switch (repairLocation) {
        case undefined:
            res.redirect('/v4/repair-kitchen');
            break;
            case "Kitchen":
            res.redirect('/v4/repair-kitchen');
            break;
            case "Bathroom":
            res.redirect('/v4/repair-bathroom');
            break;
            case "Bedroom":
            res.redirect('/v4/repair-bedroom');
            break;
            case "Living areas":
            res.redirect('/v4/repair-living-areas');
            break;
            case "Outside":
            res.redirect('/v4/repair-outside');
            break;
    };
});

router.post('/v4/repair-kitchen', function (req, res) {
    var repairKitchen = req.session.data['repair-area'];
    switch (repairKitchen) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "Cupboards":
            res.redirect('/v4/repair-cupboards');
            break;
            case "Damaged worktop":
            res.redirect('/v4/repair-description');
            break;
            case "Damp or mould":
            res.redirect('/v4/repair-damp-or-mould');
            break;
            case "Electrical":
            res.redirect('/v4/repair-electrical');
            break;
            case "Heating or hot water":
            res.redirect('/v4/repair-heating');
            break;
            case "Sink":
            res.redirect('/v4/repair-sink');
            break;
            case "Walls, floor or ceiling":
            res.redirect('/v4/repair-walls');
            break;
            case "Window":
            res.redirect('/v4/repair-window');
            break;
            case "Door":
            res.redirect('/v4/repair-door');
            break;
    };
});

router.post('/v4/repair-bathroom', function (req, res) {
    var repairBathroom = req.session.data['repair-area'];
    switch (repairBathroom) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "bath":
            res.redirect('/v4/repair-bath');
            break;
            case "shower":
            res.redirect('/v4/repair-shower');
            break;
            case "sink":
            res.redirect('/v4/repair-sink');
            break;
            case "toilet":
            res.redirect('/v4/repair-toilet');
            break;
            case "damp-or-mould":
            res.redirect('/v4/repair-damp-or-mould');
            break;
            case "door":
            res.redirect('/v4/repair-door-bathroom');
            break;
            case "lighting":
            res.redirect('/v4/repair-bathroom-lighting');
            break;
            case "walls-floor-ceiling":
            res.redirect('/v4/repair-bathroom-wall');
            break;
            case "window":
            res.redirect('/v4/repair-bathroom-window');
            break;
    };
});

router.post('/v4/repair-bathroom-window', function (req, res) {
    var repairBathroomWindow = req.session.data['repair-type-bathroom-window'];
    switch (repairBathroomWindow) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "smashed":
            res.redirect('/v4/emergency');
            break;
            case "open":
            res.redirect('/v4/emergency');
            break;
            case "shut":
            res.redirect('/v4/repair-description');
            break;
            case "condensation":
            res.redirect('/v4/repair-description');
            break;
    };
});

router.post("/v4/repair-damp-or-mould", function(req, res) {
  if (req.session.data["repair-damp-or-mould"] === "yes") {
    res.redirect("/v4/emergency");
  } else {
    res.redirect("/v4/repair-description")
  }
});

router.post('/v4/repair-shower', function (req, res) {
    var repairShower = req.session.data['repair-type-shower'];
    switch (repairShower) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "electric":
            res.redirect('/v4/repair-description');
            break;
            case "tap-shower":
            res.redirect('/v4/repair-description');
            break;
            case "shower-hose":
            res.redirect('/v4/repair-description');
            break;
            case "shower-head":
            res.redirect('/v4/repair-description');
            break;
            case "tray-broken":
            res.redirect('/v4/repair-description');
            break;
            case "door-broken":
            res.redirect('/v4/repair-description');
            break;
            case "blockage":
            res.redirect('/v4/emergency');
            break;
    };
});

router.post('/v4/repair-window', function (req, res) {
    var repairWindow = req.session.data['repair-type-window'];
    switch (repairWindow) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "broken-glass":
            res.redirect('/v4/emergency');
            break;
            case "window-open":
            res.redirect('/v4/emergency');
            break;
            case "window-shut":
            res.redirect('/v4/repair-description');
            break;
            case "condensation":
            res.redirect('/v4/repair-description');
            break;
    };
});

router.post('/v4/repair-bedroom', function (req, res) {
    var repairBedroom = req.session.data['repair-area-bedroom'];
    switch (repairBedroom) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "door":
            res.redirect('/v4/repair-door-bedroom');
            break;
            case "lighting-or-sockets":
            res.redirect('/v4/repair-lighting-bedroom');
            break;
            case "walls":
            res.redirect('/v4/repair-walls');
            break;
            case "window":
            res.redirect('/v4/repair-window');
            break;
            case "damp":
            res.redirect('/v4/repair-damp-or-mould');
            break;
            case "radiator":
            res.redirect('/v4/repair-description');
            break;
    };
});

router.post('/v4/repair-living-areas', function (req, res) {
    var repairBedroom = req.session.data['repair-area'];
    switch (repairBedroom) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "door":
            res.redirect('/v4/repair-door-living-areas');
            break;
            case "electrical":
            res.redirect('/v4/repair-living-areas-lighting');
            break;
            case "walls":
            res.redirect('/v4/repair-walls');
            break;
            case "window":
            res.redirect('/v4/repair-window');
            break;
            case "damp-or-mould":
            res.redirect('/v4/repair-damp-or-mould');
            break;
            case "stairs":
            res.redirect('/v4/repair-living-areas-stairs');
            break;
    };
});

router.post('/v4/repair-living-areas-window', function (req, res) {
    var repairLivingAreasWindow = req.session.data['living-areas-window'];
    switch (repairLivingAreasWindow) {
        case undefined:
            res.redirect('/v4/not-eligible');
            break;
            case "smashed":
            res.redirect('/v4/not-eligible');
            break;
            case "downstairs-open":
            res.redirect('/v4/not-eligible');
            break;
            case "upstairs-open":
            res.redirect('/v4/repair-description');
            break;
            case "stuck-shut":
            res.redirect('/v4/repair-description');
            break;
            case "condensation":
            res.redirect('/v4/not-eligible-non-emergency');
            break;

    };
});

router.post('/v4/repair-living-areas-damp', function (req, res) {
    var repairLivingAreasDamp = req.session.data['living-areas-damp'];
    switch (repairLivingAreasDamp) {
        case undefined:
            res.redirect('/v4/not-eligible');
            break;
            case "yes":
            res.redirect('/v4/not-eligible');
            break;
            case "no":
            res.redirect('/v4/repair-description');
            break;

    };
});

router.post('/v4/repair-outside', function (req, res) {
    var repairOutside = req.session.data['repair-area'];
    switch (repairOutside) {
        case undefined:
            res.redirect('/v4/not-eligible');
            break;
            case "doors":
            res.redirect('/v4/outside-doors');
            break;
            case "outdoor-security-lights":
            res.redirect('/v4/repair-description');
            break;
            case "garage":
            res.redirect('/v4/outside-garage');
            break;
            case "gates-pathways":
            res.redirect('/v4/outside-gates-pathways');
            break;
            case "locks-fittings":
            res.redirect('/v4/repair-description');
            break;
            case "roof":
            res.redirect('/v4/outside-roof');
            break;
    };
});

router.post('/v4/outside-garage', function (req, res) {
    var repairOutsideGarage = req.session.data['outside-garage'];
    switch (repairOutsideGarage) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "door":
            res.redirect('/v4/repair-description');
            break;
            case "lock":
            res.redirect('/v4/repair-description');
            break;
            case "broken-in":
            res.redirect('/v4/not-eligible');
            break;
            case "roof":
            res.redirect('/v4/repair-description');
            break;
    };
});

router.post('/v4/outside-water', function (req, res) {
    var repairOutsideWater = req.session.data['outside-water'];
    switch (repairOutsideWater) {
        case undefined:
            res.redirect('/v4/not-eligible-non-emergency');
            break;
            case "drainage":
            res.redirect('/v4/not-eligible-non-emergency');
            break;
            case "tap":
            res.redirect('/v4/not-eligible-non-emergency');
            break;
    };
});
router.post('/v4/outside-graffiti', function (req, res) {
    var repairOutsideGraffiti = req.session.data['outside-graffiti'];
    switch (repairOutsideGraffiti) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "yes":
            res.redirect('/v4/not-eligible-non-emergency');
            break;
            case "no":
            res.redirect('/v4/repair-description');
            break;
    };
});

router.post('/v4/outside-fly-tipping', function (req, res) {
    var repairOutsideFlyTipping = req.session.data['outside-fly-tipping'];
    switch (repairOutsideFlyTipping) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "yes":
            res.redirect('/v4/not-eligible');
            break;
            case "no":
            res.redirect('/v4/repair-description');
            break;
    };
});


router.post('/v4/repair-toilet', function (req, res) {
    var repairToilet = req.session.data['repair-type-toilet'];
    switch (repairToilet) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "not-flushing":
            res.redirect('/v4/repair-description');
            break;
            case "overflowing":
            res.redirect('/v4/emergency');
            break;
            case "coming-loose":
            res.redirect('/v4/repair-description');
            break;
            case "cracked":
            res.redirect('/v4/repair-description');
            break;
            case "seat":
            res.redirect('/v4/not-eligible-non-emergency');
            break;
    };
});

router.post('/v4/repair-door-bathroom', function (req, res) {
    var repairDoorBathroom = req.session.data['repair-type-door-bathroom'];
    switch (repairDoorBathroom) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "sticking":
            res.redirect('/v4/repair-description');
            break;
            case "lock":
            res.redirect('/v4/repair-description');
            break;
            case "adjust":
            res.redirect('/v4/not-eligible-non-emergency');
            break;
    };
});

router.post('/v4/repair-door-bedroom', function (req, res) {
    var repairDoorBedroom = req.session.data['repair-type-door-bedroom'];
    switch (repairDoorBedroom) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "sticking":
            res.redirect('/v4/repair-description');
            break;
            case "lock":
            res.redirect('/v4/repair-description');
            break;
            case "adjust":
            res.redirect('/v4/not-eligible-non-emergency');
            break;
    };
});

router.post('/v4/repair-door-living-areas', function (req, res) {
    var repairDoorLivingAreas = req.session.data['repair-type-door-living-areas'];
    switch (repairDoorLivingAreas) {
        case undefined:
            res.redirect('/v4/repair-description');
            break;
            case "sticking":
            res.redirect('/v4/repair-description');
            break;
            case "lock":
            res.redirect('/v4/repair-description');
            break;
            case "adjust":
            res.redirect('/v4/not-eligible-non-emergency');
            break;
    };
});

router.post("/v4/repair-description", function(req, res) {
  if (req.session.data["repair-description"] === "") {
    res.redirect("/v4/repair-description-error");
  } else {
    res.redirect("/v4/contact-person")
  }
});

router.post("/v4/repair-description-error", function(req, res) {
  if (req.session.data["repair-description-error"] === "") {
    res.redirect("/v4/repair-description-error");
  } else {
    res.redirect("/v4/contact-person")
  }
});

router.post('/v4/cancel-booking', function (req, res) {
    var cancel = req.session.data['cancel'];
    switch (cancel) {
        case undefined:
            res.redirect('/v4/view-booking');
            break;
            case "yes":
            res.redirect('/v4/booking-cancelled');
            break;
            case "no":
            res.redirect('/v4/view-booking');
            break;
    };
});

module.exports = router
