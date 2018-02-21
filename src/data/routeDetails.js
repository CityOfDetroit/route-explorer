const routeDetails = [{
        number: 7,
        name: 'Cadillac-Harper',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Mack and Moross', 'Rosa Parks TC'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/April%202016/07CadilllacHarper.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:08am", "12:02am"],
                frequency: [
                    ["peak", 30],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:55am", "11:49pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:00am", "8:48pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Saturdays from 7AM-8PM, this bus departs Rosa Parks Transit Center after a layover as Route 10-Chene. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 9,
        name: 'Chalmers',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Jefferson & Maryland', '7 Mile & Gratiot'],
        via: ['Chalmers', "Schoenherr"],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/April2017schedules/9ChalmersMS.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["5:15am", "8:52pm"],
                frequency: [
                    ["peak", 30],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:45am", "7:52pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:20am", "5:04pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 10,
        name: 'Chene',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Varjo & Van Dyke'],
        via: ['Lafayette', 'Chene', 'Jos. Campau', 'Nevada'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/April%202016/10CheneMS.pdf?ver=2016-04-22-150329-977"],
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "10:46pm"],
                frequency: [
                    ["peak", 40],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:00am", "8:46pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:00am", "7:50pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Saturdays, this bus departs Rosa Parks Transit Center after a layover as Route 7-Cadillac-Harper. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 11,
        name: 'Clairmount',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Clark & Fort', 'Lycaste & Jefferson'],
        via: ['Junction', 'Epworth', 'Joy', 'Harper', 'St. Jean'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/11Clairmount.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:10am", "9:03pm"],
                frequency: [
                    ["all day", 45],
                ]
            }
        },
        notes: ""
    },
    {
        number: 12,
        name: 'Conant',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Fairgrounds TC', 'Belle Isle'],
        via: ['Conant', 'E. Outer Dr'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/April%202016/12ConantMS.pdf?ver=2016-04-22-150443-267"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:50am", "8:43pm"],
                frequency: [
                    ["all day", 50],
                ]
            },
            "Saturday": {
                service_hours: ["7:30am", "8:43pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:00am", "6:43pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 13,
        name: 'Conner',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Conner & Jefferson', 'Bel-Air Center'],
        via: ['Conner'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/13ConnerMS.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["6:15am", "9:49pm"],
                frequency: [
                    ["peak", 40],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["5:33am", "8:27pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["6:55am", "7:04pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 14,
        name: 'Crosstown',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Warren & Telegraph', 'Warren & Moross'],
        via: ['Warren', 'Forest'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/April2017schedules/14CrosstownMS.pdf?ver=2017-04-21-164624-043"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 20],
                    ["off-peak", 30],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 45],
                    ["evening", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 45],
                    ["evening", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 15,
        name: 'Chicago Davison',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rouge Park', 'Woodward & Manchester'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/15ChicagoDavison.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:02am", "9:16pm"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:55am", "8:19pm"],
                frequency: [
                    ["all day", 45]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:00am", "7:39pm"],
                frequency: [
                    ["all day", 45]
                ]
            }
        },
        notes: ""
    },
    {
        number: 16,
        name: 'Dexter',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Providence Hospital'],
        via: ['Cass', 'West Grand Bl.', 'Dexter', 'Greenfield', 'Livernois', 'Curtis'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/16DexterMF.pdf", "http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/16DexterSS.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 12],
                    ["off-peak", 15],
                    ["evening", 30]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 30],
                    ["evening", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 30],
                    ["evening", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 17,
        name: 'Eight Mile',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Mack & Moross', '7 Mile & Grand River'],
        via: ['8 Mile Road'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/September2017Schedules/17EightMile.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["4:09am", "2:44am"],
                frequency: [
                    ["peak", 20],
                    ["off-peak", 30],
                    ["evening", 45],
                ]
            },
            "Saturday": {
                service_hours: ["4:51am", "1:42am"],
                frequency: [
                    ["all day", 30],
                    ["evening", 50],
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["5:45am", "11:31pm"],
                frequency: [
                    ["all day", 55],
                    ["evening", 55]
                ]
            }
        },
        notes: ""
    },
    {
        number: 18,
        name: 'Fenkell',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Telegraph & Fenkell'],
        via: ['12th (northbound)/14th (southbound)', 'Fenkell'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/April%202016/18FenkellMS.pdf?ver=2016-04-22-150631-777"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["5:10am", "11:02pm"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 45],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:00am", "10L57pm"],
                frequency: [
                    ["all day", 45],
                    ["evening", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:41am", "8:28pm"],
                frequency: [
                    ["all day", 45],
                    ["evening", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 19,
        name: 'Fort',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'West Outer Drive'],
        via: ['Fort St.'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/September2017Schedules/19Fort.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["4:00am", "12:25am"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 35],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["5:00am", "12:28am"],
                frequency: [
                    ["all day", 40],
                    ["evening", 65]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["5:00am", "10:45pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Sundays, this bus departs Rosa Parks Transit Center after a layover as Route 49-Vernor. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 21,
        name: 'Grand River',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'West 7 Mile'],
        via: ['Grand River'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/21GrandRiverMF.pdf", "http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/21GrandRiverSS.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 10],
                    ["off-peak", 15],
                    ["evening", 30]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 20],
                    ["evening", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 30],
                    ["evening", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 22,
        name: 'Greenfield',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Northland Mall', 'Fairlane Mall'],
        via: ["Greenfield"],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/September2017Schedules/22Greenfield.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["4:28am", "1:40am"],
                frequency: [
                    ["all day", 15],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["5:15am", "12:39am"],
                frequency: [
                    ["all day", 20],
                    ["evening", 30]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["6:05am", "10:38pm"],
                frequency: [
                    ["all day", 35],
                    ["evening", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 23,
        name: 'Hamilton',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', '8 Mile Meijer'],
        via: ['2nd', 'Hamilton', 'McNichols', 'John R'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/September2017Schedules/23Hamilton.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:37am", "11:23pm"],
                frequency: [
                    ["all day", 40],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["7:08am", "9:44pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:08am", "8:43pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 25,
        name: 'Jefferson',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Jefferson & Maryland'],
        via: ['Jefferson'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/April2017schedules/25JeffersonMS.pdf?ver=2017-04-21-170105-283"],
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 27,
        name: 'Joy',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Redford Plaza', 'Rosa Parks TC'],
        via: ['Lafayette', 'W. Grand Blvd.', 'Joy Rd.'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/September2017Schedules/27Joy.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["5:21am", "11:51pm"],
                frequency: [
                    ["peak", 30],
                    ["off-peak", 50],
                    ["evening", 60],
                ]
            },
            "Saturday": {
                service_hours: ["6:40am", "10:35pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:01am", "7:51pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 29,
        name: 'Linwood',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Univ. of Detroit Mercy'],
        via: ['Trumbull', 'Linwood'],
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/September2017Schedules/29Linwood.pdf"],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["5:15am", "11:30pm"],
                frequency: [
                    ["peak", 35],
                    ["all day", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:51am", "9:35pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:00am", "7:40pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Saturdays, Sundays and weekday nights, this bus departs Rosa Parks Transit Center after a layover as Route 27-Joy. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 30,
        name: 'Livernois',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Fairgrounds TC', 'W. Jefferson & Brennan'],
        via: ['Livernois'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/April%202016/30LivernoisMS.pdf?ver=2016-04-22-151449-233"],
        services: {
            "Monday-Friday": {
                service_hours: ["6:00am", "9:46pm"],
                frequency: [
                    ["peak", 40],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:57am", "9:45pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:00am", "7:45pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 31,
        name: 'Mack',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Mack & Moross', 'Rosa Parks TC'],
        via: ['Mack', 'Cass'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/31MackMS.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["4:47am", "12:44am"],
                frequency: [
                    ["peak", 20],
                    ["off-peak", 30],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["5:39am", "10:51am"],
                frequency: [
                    ["peak", 30],
                    ["off-peak", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["6:40am", "9:47pm"],
                frequency: [
                    ["all day", 55]
                ]
            }
        },
        notes: ""
    },
    {
        number: 32,
        name: 'McNichols',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['6 Mile & Telegraph', 'Mack & Moross'],
        via: ['McNichols', 'Cadieux'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/Jan2017schedules/32McNichols.pdf?ver=2017-01-30-160912-920"],
        services: {
            "Monday-Friday": {
                service_hours: ["4:55am", "1:40am"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 50]
                ]
            },
            "Saturday": {
                service_hours: ["5:49am", "12:54am"],
                frequency: [
                    ["daytime", 45],
                    ["evening", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:04am", "10:13pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 34,
        name: 'Gratiot',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['3rd & Abbott', '8 Mile & Gratiot'],
        via: ['Gratiot'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/34GratiotMF.pdf", "http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/34GratiotSS.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 12],
                    ["off-peak", 30],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 15],
                    ["off-peak", 35],
                    ["evening", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 30],
                    ["off-peak", 35],
                    ["evening", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 37,
        name: 'Michigan',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Fairlane Mall'],
        via: ['Michigan Ave'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/Jan2017schedules/37Michigan.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 20],
                    ["off-peak", 35],
                    ["evening", 50]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["day", 30],
                    ["evening", 60],
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["day", 40],
                    ["evening", 60],
                ]
            }
        },
        notes: ""
    },
    {
        number: 38,
        name: 'Plymouth',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['I-96 & Middlebelt', '8 Mile & Hayes'],
        via: ['Plymouth', 'Elmhurst', 'Caniff'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/38Plymouth.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["4:10am", "12:11am"],
                frequency: [
                    ["peak", 45],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["4:22am", "10:15pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["4:22am", "8:20pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 39,
        name: 'Puritan',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Southfield & Fenkell', 'Manchester & Woodward'],
        via: ['Fenkell', 'Puritan'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/39Puritan.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["6:00am", "8:27pm"],
                frequency: [
                    ["all day", 60],
                ]
            },
            "Saturday": {
                service_hours: ["7:00am", "6:24pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:00am", "4:00pm"],
                frequency: [
                    ["all day", 65]
                ]
            }
        },
        notes: ""
    },
    {
        number: 40,
        name: 'Russell',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Friday'],
        between: ['Rosa Parks TC', 'Van Dyke & E. Outer Dr'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/40RussellMF.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["6:00am", "7:49pm"],
                frequency: [
                    ["all day", 65]
                ]
            }
        },
        notes: ""
    },
    {
        number: 41,
        name: 'Schaefer',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['8 Mile & Schaefer', 'Brennan Loop'],
        via: ['Schaefer', 'W. Jefferson'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/41SchaeferMS.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:10am", "9:56pm"],
                frequency: [
                    ["all day", 60],
                ]
            },
            "Saturday": {
                service_hours: ["7:00am", "8:57pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:00am", "8:57pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 42,
        name: 'Mid City Loop',
        orientation: 'CW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Woodward & Manchester', 'Woodward & Mack'],
        via: ['Rosa Parks', 'Hamilton', 'Manchester', 'Oakland', 'St. Antoine'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/42%20Mid-City%20Loop.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:20am", "8:59pm"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 30],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["7:15am", "7:00pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:15am", "6:00pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 43,
        name: 'Schoolcraft',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Redford Plaza', '8 Mile & Ryan'],
        via: ['Schoolcraft', 'Oakman Blvd', 'Manchester', 'Oakland'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/43Schoolcraft.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:10am", "8:24pm"],
                frequency: [
                    ["all day", 50]
                ]
            },
            "Saturday": {
                service_hours: ["7:00am", "7:10pm"],
                frequency: [
                    ["all day", 50]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["10:05am", "7:02pm"],
                frequency: [
                    ["all day", 50]
                ]
            }
        },
        notes: ""
    },
    {
        number: 45,
        name: 'Seven Mile',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Meijer Old Redford', 'Mack & Moross'],
        via: ['Lahser', '7 Mile', 'Morang', 'Moross'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/45SevenMileMF.pdf", "http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/45SevenMileSS.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 15],
                    ["off-peak", 30],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 40],
                    ["evening", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 45],
                    ["evening", 60]                
                ]
            }
        },
        notes: ""
    },
    {
        number: 46,
        name: 'Southfield',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Friday'],
        between: ['9 Mile & Rutland', 'Fairlane Mall'],
        via: ['Southfield Service Drive'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/September2017Schedules/46Southfield.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:48am", "8:20pm"],
                frequency: [
                    ["all day", 50]
                ]
            }
        },
        notes: ""
    },
    {
        number: 47,
        name: 'Tireman',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Warren & Pierson', 'John R & Mack'],
        via: ['Warren', 'Tireman', 'MLK'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/47TiremanMS.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:10am", "7:35pm"],
                frequency: [
                    ["all day", 50],
                ]
            },
            "Saturday": {
                service_hours: ["7:40am", "6:50pm"],
                frequency: [
                    ["all day", 50]
                ]
            }
        },
        notes: ""
    },
    {
        number: 48,
        name: 'Van Dyke-Lafayette',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Bel Air Center', 'Rosa Parks TC'],
        via: ['Lafayette', 'Van Dyke'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/Jan2017schedules/48VanDykeLafayette.pdf?ver=2017-01-27-121537-590"],
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 20],
                    ["off-peak", 30],
                    ["evening", 60]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 35],
                    ["evening", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 50],
                    ["evening", 60]
                ]
            }
        },
        notes: "On weekday and Saturday nights, this bus departs Rosa Parks Transit Center after a layover as Route 25-Jefferson. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 49,
        name: 'Vernor',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Michigan & Schaefer', 'Rosa Parks TC'],
        via: ['Vernor', 'Bagley', 'Lafayette'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/June2017Schedules/49VernorMS.pdf?ver=2017-06-26-142208-523"],
        services: {
            "Monday-Friday": {
                service_hours: ["4:40am", "1:18am"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 45]
                ]
            },
            "Saturday": {
                service_hours: ["4:59am", "1:03am"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 45]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["6:03am", "12:00am"],
                frequency: [
                    ["all day", 55]
                ]
            }
        },
        notes: "On Sundays, this bus departs Rosa Parks Transit Center after a layover as Route 19-Fort. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 53,
        name: 'Woodward',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Fairgrounds TC', 'Downtown'],
        via: ['Woodward Avenue'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/June2017Schedules/53WoodwardMS.pdf?ver=2017-06-26-135605-973"],
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 10],
                    ["off-peak", 15],
                    ["evening", 30]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["daytime", 10],
                    ["evening", 30] 
                ]               
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["daytime", 15],
                    ["evening", 30]
                ]         
            }
        },
        notes: ""
    },
    {
        number: 54,
        name: 'Wyoming',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['8 Mile & Wyoming', 'Delray'],
        via: ['Wyoming', 'Dearborn'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2016/January/54WyomingMS.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:00am", "9:51pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Saturday": {
                service_hours: ["7:00am", "8:52pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:00am", "7:52pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 60,
        name: 'Evergreen',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Northland Mall', 'Fairlane Mall'],
        via: ['8 Mile Rd', 'Evergreen'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/September2017Schedules/60Evergreen.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:55am", "10:41pm"],
                frequency: [
                    ["peak", 20],
                    ["off-peak", 35],
                    ["evening", 60],
                ]
            },
            "Saturday": {
                service_hours: ["6:58am", "10:31pm"],
                frequency: [
                    ["all day", 35]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:38am", "7:43pm"],
                frequency: [
                    ["all day", 55]
                ]
            }
        },
        notes: ""
    },
    {
        number: 80,
        name: 'Villages Direct',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Jefferson & Maryland', 'W. Grand Blvd. & Trumbull'],
        via: ['Jefferson', 'Lafayette', 'Cass', 'W. Grand Blvd.'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/April2017schedules/80VillagesDirectMF.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:37am", "8:10pm"],
                frequency: [
                    ["peak", 30],
                ]
            }
        },
        notes: ""
    },
    {
        number: 89,
        name: 'Southwest Direct',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Trumbull & W. Grand Blvd.', 'W. Outer Dr. & Fort'],
        via: ['Bassett', 'Vernor', 'Cass', 'W. Grand Blvd.'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/April2017schedules/89SouthwestDirectMF.pdf?ver=2017-04-21-171512-467"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:35am", "6:55pm"],
                frequency: [
                    ["peak", 40],
                ]
            }
        },
        notes: ""
    },
    {
        number: 92,
        name: 'Rosedale Express',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Friday'],
        between: ['8 Mile & Evergreen', 'Downtown'],
        via: ['Grand River', 'I-96'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/Bus%20Schedules/January%202018/92RosedaleExpressMF.pdf"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:35am", "6:55pm"],
                frequency: [
                    ["peak", 35],
                ]
            }
        },
        notes: ""
    },
    {
        number: 95,
        name: 'Ryan Express',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Friday'],
        between: ['Downtown', 'Van Dyke & Outer Dr.'],
        via: ['Ryan', 'I-75'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/Jan2017schedules/95RyanExpress.pdf?ver=2017-01-27-132516-670"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:51am", "6:45pm"],
                frequency: [
                    ["peak", 35],
                ]
            }
        },
        notes: ""
    },
    {
        number: 96,
        name: 'Joy Express',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Friday'],
        between: ['Downtown', 'Weatherby'],
        via: ['Joy Road', 'I-96'],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: ["http://www.detroitmi.gov/Portals/0/docs/deptoftransportation/pdfs/2017/Jan2017schedules/96JoyExpress.pdf?ver=2017-01-27-132707-847"],
        services: {
            "Monday-Friday": {
                service_hours: ["5:43am", "6:54pm"],
                frequency: [
                    ["peak", 35],
                ]
            }
        },
        notes: ""
    }
]

export default routeDetails;