const data = [
    {
        name: "الاستاذ/ ايمن عبد الله",
        subject: "مادة الفيزياء",

        mobile: "49123657894",
        grade: "الصف الأول الثانوي",
        area: "القاهرة",
        center: "بسملة",
        place: "المعادى",
        image: "assets/images/teachers.jpg",
    },
    {
        name: "الاستاذ/ طارق محمد",
        subject: "مادة الرياضيات",
        place: "المعادى",
        mobile: "123456789101",
        grade: "الصف الأول الثانوي",
        area: "الاسكندريه",
        center: "مكة",
        image: "assets/images/teachers.jpg",
    },
    {
        name: "الاستاذ/عدلى أحمد",
        subject: "مادة التاريخ",
        mobile: "65478123490",
        grade: "الصف الثاني الثانوي",
        area: "الاسكندريه",
        center: "بسملة",
        place: "المعادى",
        image: "assets/images/teachers.jpg",
    },
    {
        name: "الاستاذة/عزة محمد",
        subject: "مادة الأحياء",
        mobile: "32164985017",
        grade: "الصف الثالث الثانوي",
        area: "القاهرة",
        center: "بسملة",
        place: "مدينة نصر",
        image: "assets/images/teachers.jpg",
    },
    {
        name: "الاستاذ/ عمر عبد الله",
        subject: "مادة الفيزياء",
        center: "مكة",
        place: "مدينة نصر",

        mobile: "46987523154",
        grade: "الصف الأول الثانوي",
        area: "الاسكندريه",

        image: "assets/images/teachers.jpg",
    },
    {
        name: "الاستاذ/ محمود زيدان",
        center: "بسملة",
        subject: "مادة التاريخ",
        mobile: "65478123496",
        grade: "الصف الثالث الثانوي",
        area: "الاسكندريه",
        place: "مدينة نصر",

        image: "assets/images/teachers.jpg",
    },
];

var teachers = "",
    names = "",
    subjects = "",
    mobiles = "",
    grades = "",
    areas = "";
places = "";
centers = "";

for (var i = 0; i < data.length; i++) {
    var name = data[i].name,
        subject = data[i].subject,
        mobile = data[i].mobile,
        grade = data[i].grade,
        area = data[i].area,
        center = data[i].center,
        place = data[i].place,
        rawgrade = grade.replace("$", ""),
        rawgrade = parseInt(rawgrade.replace(",", "")),
        image = data[i].image;

    //create teacher cards
    teachers +=
        "<div class='col-lg-4 col-md-6 col-sm-6 teacher ' data-name='" +
        name +
        "' data-subject='" +
        subject +
        "' data-mobile='" +
        mobile +
        "' data-area='" +
        area +
        "' data-center='" +
        center +
        "' data-grade='" +
        grade +
        "' data-place='" +
        place +
        "'><div class='teacher-inner '><img src='" +
        image +
        "'>" +
        `<div class="d-flex align-items-center"> <h5>${name}<i onclick="myFunction(this)"  class="_icon fal fa-heart"></i>
        </h5> </div>` +
        " " +
        `<p class="filter-text" ><i class="_icon  fas fa-bookmark"></i>${subject}</p>` +
        " " +
        `<p class="filter-text"><i class="_icon  fas fa-mobile-alt"></i>${mobile}</p>` +
        "" +
        `
        <div class="d-flex teach-icons justify-content-between">
            <a  href="#">
                <i class="fas fa-user-plus"></i>
                <span>500</span>
            </a>

            <a href="#">
                <i class="fas fa-question-circle"></i>
                <span>2000</span>
                </a>
                </div>

  ` +
        "</div></div>";

    //create dropdown of names
    if (
        names.indexOf("<option value='" + name + "'>" + name + "</option>") ==
        -1
    ) {
        names += "<option value='" + name + "'>" + name + "</option>";
    }

    //create dropdown of subjects
    if (
        subjects.indexOf(
            "<option value='" + subject + "'>" + subject + "</option>"
        ) == -1
    ) {
        subjects += "<option value='" + subject + "'>" + subject + "</option>";
    }

    //create dropdown of mobiles
    if (
        mobiles.indexOf(
            "<option value='" + mobile + "'>" + mobile + "</option>"
        ) == -1
    ) {
        mobiles += "<option value='" + mobile + "'>" + mobile + "</option>";
    }
    if (
        places.indexOf(
            "<option value='" + place + "'>" + place + "</option>"
        ) == -1
    ) {
        places += "<option value='" + place + "'>" + place + "</option>";
    }
    //create dropdown of grades
    if (
        grades.indexOf(
            "<option value='" + grade + "'>" + grade + "</option>"
        ) == -1
    ) {
        grades += "<option value='" + grade + "'>" + grade + "</option>";
    }

    //create dropdown of areas
    if (
        areas.indexOf("<option value='" + area + "'>" + area + "</option>") ==
        -1
    ) {
        areas += "<option value='" + area + "'>" + area + "</option>";
    }

    //create dropdown of centers
    if (
        centers.indexOf(
            "<option value='" + center + "'>" + center + "</option>"
        ) == -1
    ) {
        centers += "<option value='" + center + "'>" + center + "</option>";
    }
}

$("#teachers").html(teachers);
$(".filter-name").append(names);
$(".filter-subject").append(subjects);
$(".filter-mobile").append(mobiles);
$(".filter-grade").append(grades);
$(".filter-area").append(areas);
$(".filter-center").append(centers);
$(".filter-place").append(places);

var filtersObject = {};

//on filter change
$(".filter").on("change", function () {
    var filterName = $(this).data("filter"),
        filterVal = $(this).val();

    if (filterVal == "") {
        delete filtersObject[filterName];
    } else {
        filtersObject[filterName] = filterVal;
    }

    var filters = "";

    for (var key in filtersObject) {
        if (filtersObject.hasOwnProperty(key)) {
            filters += "[data-" + key + "='" + filtersObject[key] + "']";
        }
    }

    if (filters == "") {
        $(".teacher").show();
    } else {
        $(".teacher").hide();
        $(".teacher").hide().filter(filters).show();
    }
});

//on search form submit
$("#search-form").submit(function (e) {
    e.preventDefault();
    var query = $("#search-form input").val().toLowerCase();

    $(".teacher").hide();
    $(".teacher").each(function () {
        var name = $(this).data("name").toLowerCase(),
            subject = $(this).data("subject").toLowerCase(),
            grade = $(this).data("grade").toLowerCase();

        if (
            name.indexOf(query) > -1 ||
            subject.indexOf(query) > -1 ||
            grade.indexOf(query) > -1
        ) {
            $(this).show();
        }
    });
});

$(document).ready(function () {
    $(".filter-sec").click(function () {
        $(".filter-hidden").toggleClass("hidden");
    });
});

function myFunction(x) {
    x.classList.toggle("fas");
    console.log("ok");
}
