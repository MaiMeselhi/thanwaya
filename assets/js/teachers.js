const data = [
    {
        name: "الاستاذ/ طارق محمد",
        subject: "مادة الرياضيات",

        mobile: "Electric",
        grade: "الصف الأول الثانوي",
        area: "الاسكندريه",
        center: "مكة",
        image: "assets/images/teacher.jpg",
    },
    {
        name: "الاستاذ/ ايمن عبد الله",
        subject: "مادة الفيزياء",

        mobile: "Electric",
        grade: "الصف الأول الثانوي",
        area: "القاهرة",
        center: "مكة",

        image: "assets/images/teacher.jpg",
    },
    {
        name: "الاستاذ/ عمر عبد الله",
        subject: "مادة الفيزياء",
        center: "مكة",

        mobile: "Electric",
        grade: "الصف الأول الثانوي",
        area: "الاسكندريه",

        image: "assets/images/teacher.jpg",
    },
    {
        name: "الاستاذ/ محمود زيدان",
        center: "بسملة",
        subject: "مادة التاريخ",
        mobile: "Electric",
        grade: "الصف الثالث الثانوي",
        area: "الاسكندريه",

        image: "assets/images/teacher.jpg",
    },
    {
        name: "الاستاذ/عدلى أحمد",
        subject: "مادة التاريخ",
        mobile: "Electric",
        grade: "الصف الثاني الثانوي",
        area: "الاسكندريه",
        center: "بسملة",

        image: "assets/images/teacher.jpg",
    },
    {
        name: "الاستاذة/عزة محمد",
        subject: "مادة الأحياء",
        mobile: "Electric",
        grade: "الصف الثالث الثانوي",
        area: "القاهرة",
        center: "بسملة",

        image: "assets/images/teacher.jpg",
    },
];

var teachers = "",
    names = "",
    subjects = "",
    mobiles = "",
    grades = "",
    areas = "";
centers = "";

for (var i = 0; i < data.length; i++) {
    var name = data[i].name,
        subject = data[i].subject,
        mobile = data[i].mobile,
        grade = data[i].grade,
        area = data[i].area,
        center = data[i].center,
        rawgrade = grade.replace("$", ""),
        rawgrade = parseInt(rawgrade.replace(",", "")),
        image = data[i].image;

    //create teacher cards
    teachers +=
        "<div class='col-lg-4 col-md-6 col-sm-6 teacher' data-name='" +
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
        "'><div class='teacher-inner text-center '><img src='" +
        image +
        "'>" +
        ` <h5> <i class="fas fa-user-shield"></i>${name} </h5> ` +
        " " +
        `<p> <i class="fas fa-bookmark"></i>${subject}</p>` +
        "" +
        `<p><i class="fas fa-user-graduate"></i>${grade}</p>` +
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
            mobile = $(this).data("mobile").toLowerCase(),
            grade = $(this).data("grade").toLowerCase();

        if (
            name.indexOf(query) > -1 ||
            subject.indexOf(query) > -1 ||
            mobile.indexOf(query) > -1 ||
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
