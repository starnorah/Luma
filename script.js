document.addEventListener('DOMContentLoaded', () => {

    // --- Translations Dictionary ---
    const translations = {
        en: {
            nav_dashboard: "Dashboard",
            nav_optimizer: "GPA Optimizer",
            nav_resources: "Study Resources",
            nav_wellness: "Wellness",
            nav_admin: "Admin Panel",
            study_mode: "Study Mode",
            light_mode: "Light Mode",
            greeting: "Good Evening, Sarah",
            subtitle: "Let's focus on maintaining your academic glow.",
            current_glow: "Current Glow",
            status_optimal: "Optimal Glow",
            status_moderate: "Moderate",
            status_low: "Low Energy",
            gpa_tracker: "GPA Tracker",
            current: "Current",
            target: "Target",
            floor: "Floor: 3.5",
            ceiling: "Ceiling: 4.8",
            next_action: "Next Best Action",
            ai_suggested: "AI Suggested",
            action_title: "Review CS101 Algorithms",
            action_desc: "Focusing here gives you the highest probability of an A, offsetting last semester's score.",
            start_session: "Start 25m Session",
            course_strategy: "Course Strategy",
            status_needs_attention: "Needs attention",
            status_high_leverage: "High Leverage",
            math_sug: "Target: B+ (Minimal viable effort for GPA goal)",
            eng_sug: "Target: A+ (Highly achievable based on current engagement)",
            pause_title: "Take a Breath",
            pause_desc: "We've noticed prolonged activity. Let's pause for a mental reset before diving back into the numbers.",
            resume_tracker: "Resume Tracker",
            lang_toggle: "عربي",
            optimizer_title: "GPA Optimizer Simulator",
            optimizer_desc: "Reverse-engineer your required grades based on your current standing.",
            opt_analyzer_title: "1. Course Load Analyzer",
            opt_current_gpa: "Current Cumulative GPA",
            opt_target_gpa: "Target Graduation GPA",
            opt_active_courses: "Current Semester Courses (Select to Include)",
            opt_calculate: "Calculate Required Run Rate",
            opt_results_title: "2. Path to Recovery Strategy",
            opt_waiting: "Run the calculator to generate your recovery path.",
            opt_trajectory: "Projected Trajectory",
            resources_title: "Curated Resources",
            resources_desc: "Contextual tutorials based on your recent activity.",
            wellness_title_main: "Wellness & Cognitive Sync",
            wellness_desc_main: "Track your mental battery and optimize your study schedule.",
            well_vibe_title: "Daily Vibe Check",
            well_vibe_desc: "How are you feeling today? Your input directly affects your dashboard.",
            vibe_stress: "Stress Level",
            vibe_sleep: "Sleep Quality",
            vibe_focus: "Focus Capacity",
            vibe_sync: "Sync to Dashboard",
            well_sync_title: "Circadian Study Sync",
            well_sync_desc: "Based on your activity, here is your optimal cognitive window.",
            well_peak_title: "Peak Focus: 2:00 PM - 6:00 PM",
            well_peak_desc: "Schedule complex subjects like Algorithms during this window for maximum retention.",
            resources_title_main: "Study Resources & Contextual Guides",
            resources_desc_main: "Precision recommendations based on your current academic trajectory.",
            search_placeholder: "Search for concepts, courses, or guides...",
            filter_all: "All",
            filter_video: "Video",
            filter_pdf: "Notes",
            filter_interactive: "Interactive",
            res_math_title: "Mastering Integration by Parts",
            res_math_desc: "Targeted review addressing your recent quiz results.",
            res_cs_title: "Data Structures Cheat Sheet",
            res_cs_desc: "High-yield summary for the upcoming midterm.",
            res_eng_title: "Thesis Statement Builder",
            res_eng_desc: "Interactive tool to craft stronger essays.",
            res_time_title: "Time-Blocking for Finals",
            res_time_desc: "Optimize your circadian sync with strategic scheduling.",
            res_watch: "Watch Now",
            res_download: "Download",
            res_start: "Start Module",
            admin_title: "System Administrator",
            admin_kpi_1: "Est. Dropout Reduction",
            admin_kpi_2: "Students in Red Zone",
            admin_heatmap_title: "Burnout Risk by College",
            admin_intervention_title: "Active Interventions",
            admin_col_student: "Student ID",
            admin_col_risk: "Risk Level",
            admin_col_action: "Action",
            risk_high: "High",
            risk_med: "Medium",
            action_advisor: "Assign Advisor",
            action_nudge: "Send Nudge",
            admin_course_title: "Course Catalog Management",
            btn_add_course: "Add Course",
            title_add_course: "Add New Course",
            label_code: "Course Code",
            label_name: "Course Name",
            label_credits: "Credits",
            label_actions: "Actions",
            btn_cancel: "Cancel",
            btn_save: "Save",
            settings_title: "Edit Profile",
            settings_name: "First Name",
            settings_major: "Major",
            settings_sem: "Semester",
            settings_gpa: "Current GPA",
            settings_save: "Save Profile",
            opt_linked_profile: "Linked to Profile"
        },
        ar: {
            nav_dashboard: "لوحة القيادة",
            nav_optimizer: "مُحسّن المعدل",
            nav_resources: "مصادر التعلم",
            nav_wellness: "الصحة النفسية",
            nav_admin: "لوحة تحكم المسؤول",
            study_mode: "وضع المذاكرة",
            light_mode: "الوضع الفاتح",
            greeting: "مساء الخير، سارة",
            subtitle: "دعينا نركز على الحفاظ على توهجك الأكاديمي.",
            current_glow: "التوهج الحالي",
            status_optimal: "توهج مثالي",
            status_moderate: "معتدل",
            status_low: "طاقة منخفضة",
            gpa_tracker: "متتبع المعدل",
            current: "الحالي",
            target: "الهدف",
            floor: "الحد الأدنى: 3.5",
            ceiling: "الحد الأعلى: 4.8",
            next_action: "الخطوة التالية الأمثل",
            ai_suggested: "مُقترح بالذكاء الاصطناعي",
            action_title: "مراجعة خوارزميات CS101",
            action_desc: "التركيز هنا يمنحك أعلى احتمالية للحصول على A، لتعويض درجة الفصل الماضي.",
            start_session: "بدء جلسة 25 دقيقة",
            course_strategy: "استراتيجية المقررات",
            status_needs_attention: "يحتاج انتباه",
            status_high_leverage: "تأثير عالي",
            math_sug: "الهدف: B+ (الجهد الأدنى المطلوب لهدف المعدل)",
            eng_sug: "الهدف: A+ (يمكن تحقيقه بسهولة بناءً على تفاعلك الحالي)",
            pause_title: "خُذ نفساً",
            pause_desc: "لقد لاحظنا نشاطاً مطولاً. لنتوقف قليلاً لاستعادة صفاء الذهن قبل العودة للأرقام.",
            resume_tracker: "استئناف التتبع",
            lang_toggle: "English",
            optimizer_title: "مُحاكي مُحسّن المعدل",
            optimizer_desc: "اعرف الدرجات المطلوبة بناءً على وضعك الحالي.",
            opt_analyzer_title: "1. محلل العبء الدراسي",
            opt_current_gpa: "المعدل التراكمي الحالي",
            opt_target_gpa: "المعدل المستهدف عند التخرج",
            opt_active_courses: "مقررات الفصل الحالي (اختر للتضمين)",
            opt_calculate: "احسب المعدل المطلوب",
            opt_results_title: "2. استراتيجية مسار التعافي",
            opt_waiting: "شغّل الحاسبة لإنشاء مسار التعافي الخاص بك.",
            opt_trajectory: "المسار المتوقع",
            resources_title: "مصادر منتقاة",
            resources_desc: "شروحات تعليمية مخصصة بناءً على نشاطك الأخير.",
            wellness_title_main: "الصحة والتزامن الإدراكي",
            wellness_desc_main: "تتبع طاقتك الذهنية وجدول فترات مذاكرتك.",
            well_vibe_title: "فحص الحالة اليومي",
            well_vibe_desc: "كيف تشعر اليوم؟ إجابتك تؤثر مباشرة على لوحة القيادة الخاصة بك.",
            vibe_stress: "مستوى التوتر",
            vibe_sleep: "جودة النوم",
            vibe_focus: "القدرة على التركيز",
            vibe_sync: "مزامنة مع لوحة القيادة",
            well_sync_title: "التزامن الإدراكي اليومي",
            well_sync_desc: "بناءً على نشاطك، هذا هو وقت التركيز الأمثل لك.",
            well_peak_title: "ذروة التركيز: 2:00 م - 6:00 م",
            well_peak_desc: "جدول المواد المعقدة مثل الخوارزميات في هذا الوقت لأقصى استيعاب.",
            resources_title_main: "مصادر التعلم والأدلة المخصصة",
            resources_desc_main: "توصيات دقيقة مبنية على مسارك الأكاديمي الحالي.",
            search_placeholder: "ابحث عن مفاهيم، مقررات، أو أدلة...",
            filter_all: "الكل",
            filter_video: "فيديو",
            filter_pdf: "مذكرات",
            filter_interactive: "تفاعلي",
            res_math_title: "إتقان التكامل بالتجزئة",
            res_math_desc: "مراجعة موجهة تعالج نتائج اختبارك الأخير.",
            res_cs_title: "ملخص هياكل البيانات",
            res_cs_desc: "ملخص عالي القيمة للاختبار النصفي القادم.",
            res_eng_title: "منشئ الجملة الأساسية",
            res_eng_desc: "أداة تفاعلية لكتابة مقالات أقوى.",
            res_time_title: "تنظيم وقت للاختبارات النهائية",
            res_time_desc: "حسّن تزامنك الإدراكي بجدولة استراتيجية.",
            res_watch: "شاهد الآن",
            res_download: "تنزيل",
            res_start: "ابدأ الوحدة",
            admin_title: "مدير النظام",
            admin_kpi_1: "تقليل التسرب المتوقع",
            admin_kpi_2: "الطلاب في منطقة الخطر",
            admin_heatmap_title: "خطر الاحتراق الوظيفي حسب الكلية",
            admin_intervention_title: "التدخلات النشطة",
            admin_col_student: "الرقم الجامعي",
            admin_col_risk: "مستوى الخطر",
            admin_col_action: "الإجراء",
            risk_high: "عالي",
            risk_med: "متوسط",
            action_advisor: "تعيين مرشد",
            action_nudge: "إرسال تذكير",
            admin_course_title: "إدارة دليل المقررات",
            btn_add_course: "إضافة مقرر",
            title_add_course: "إضافة مقرر جديد",
            label_code: "رمز المقرر",
            label_name: "اسم المقرر",
            label_credits: "الساعات",
            label_actions: "الإجراءات",
            btn_cancel: "إلغاء",
            btn_save: "حفظ",
            settings_title: "تعديل الملف الشخصي",
            settings_name: "الاسم الأول",
            settings_major: "التخصص",
            settings_sem: "الفصل الدراسي",
            settings_gpa: "المعدل الحالي",
            settings_save: "حفظ الملف الشخصي",
            opt_linked_profile: "مرتبط بالملف الشخصي"
        }
    };

    let currentLang = 'en';

    // --- Language Toggle Logic ---
    const langToggleBtn = document.getElementById('langToggle');
    const htmlTag = document.documentElement;
    const bodyText = document.body;

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';

        // Update document direction and lang
        htmlTag.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        htmlTag.setAttribute('lang', currentLang);

        // Update font family dynamically
        if (currentLang === 'ar') {
            document.dir = 'rtl';
            bodyText.style.fontFamily = "'Tajawal', sans-serif";
            document.documentElement.style.setProperty('--font-main', "'Tajawal', sans-serif");
        } else {
            document.dir = 'ltr';
            bodyText.style.fontFamily = "'Outfit', sans-serif";
            document.documentElement.style.setProperty('--font-main', "'Outfit', sans-serif");
        }

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[currentLang][key]) {
                el.placeholder = translations[currentLang][key];
            }
        });

        // Update translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });

        // Update toggle text
        langToggleBtn.querySelector('span').innerText = translations[currentLang].lang_toggle;

        // Custom update for dark mode text because it changes dynamically
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        const dmText = document.getElementById('darkModeText');
        if (dmText) {
            dmText.innerText = translations[currentLang][isDark ? 'light_mode' : 'study_mode'];
        }

        // Update Chart Labels (Requires redrawing)
        if (window.gpaChartInstance) {
            window.gpaChartInstance.data.datasets[0].label = currentLang === 'ar' ? 'المعدل التراكمي' : 'Cumulative GPA';
            window.gpaChartInstance.data.datasets[1].label = currentLang === 'ar' ? 'مسار الهدف' : 'Target Path';
            window.gpaChartInstance.data.labels = currentLang === 'ar'
                ? ['فصل 1', 'فصل 2', 'فصل 3', 'فصل 4 (الحالي)', 'المتوقع']
                : ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4 (Current)', 'Predicted'];
            window.gpaChartInstance.update();
        }
    });

    // --- Admin Course Management CRUD Logic ---
    let courses = JSON.parse(localStorage.getItem('luma_courses')) || [
        { id: 1, code: 'CS101', name: 'Intro to Computer Science', credits: 4 },
        { id: 2, code: 'MATH202', name: 'Calculus II', credits: 3 },
        { id: 3, code: 'ENG102', name: 'Academic Writing', credits: 3 }
    ];

    const courseTableBody = document.getElementById('courseTableBody');
    const courseFormContainer = document.getElementById('courseFormContainer');
    const courseAdminForm = document.getElementById('courseAdminForm');
    const addCourseBtn = document.getElementById('addCourseBtn');
    const cancelCourseBtn = document.getElementById('cancelCourseBtn');

    function renderCourses() {
        if (!courseTableBody) return;
        courseTableBody.innerHTML = '';
        courses.forEach(course => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${course.code}</strong></td>
                <td>${course.name}</td>
                <td>${course.credits}</td>
                <td class="action-btns">
                    <button class="btn-icon edit-course" data-id="${course.id}" title="Edit"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-icon delete delete-course" data-id="${course.id}" title="Delete"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            courseTableBody.appendChild(tr);
        });

        // Attach event listeners to new buttons
        document.querySelectorAll('.edit-course').forEach(btn => {
            btn.addEventListener('click', (e) => editCourse(parseInt(e.currentTarget.dataset.id)));
        });
        document.querySelectorAll('.delete-course').forEach(btn => {
            btn.addEventListener('click', (e) => deleteCourse(parseInt(e.currentTarget.dataset.id)));
        });
    }

    if (addCourseBtn) {
        addCourseBtn.addEventListener('click', () => {
            courseAdminForm.reset();
            document.getElementById('courseId').value = '';
            document.getElementById('courseFormTitle').innerText = currentLang === 'ar' ? 'إضافة مقرر' : 'Add Course';
            courseFormContainer.classList.remove('hidden');
            courseFormContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (cancelCourseBtn) {
        cancelCourseBtn.addEventListener('click', () => {
            courseFormContainer.classList.add('hidden');
        });
    }

    if (courseAdminForm) {
        courseAdminForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const idVal = document.getElementById('courseId').value;
            const newCourse = {
                id: idVal ? parseInt(idVal) : Date.now(),
                code: document.getElementById('courseCode').value.toUpperCase(),
                name: document.getElementById('courseName').value,
                credits: parseInt(document.getElementById('courseCredits').value)
            };

            if (idVal) {
                // Update
                courses = courses.map(c => c.id === newCourse.id ? newCourse : c);
            } else {
                // Add
                courses.push(newCourse);
            }

            localStorage.setItem('luma_courses', JSON.stringify(courses));
            renderCourses();
            courseFormContainer.classList.add('hidden');

            // Brief visual feedback on table
            courseTableBody.style.opacity = '0.5';
            setTimeout(() => courseTableBody.style.opacity = '1', 300);
        });
    }

    function editCourse(id) {
        const course = courses.find(c => c.id === id);
        if (course) {
            document.getElementById('courseId').value = course.id;
            document.getElementById('courseCode').value = course.code;
            document.getElementById('courseName').value = course.name;
            document.getElementById('courseCredits').value = course.credits;
            document.getElementById('courseFormTitle').innerText = currentLang === 'ar' ? 'تعديل مقرر' : 'Edit Course';
            courseFormContainer.classList.remove('hidden');
            courseFormContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function deleteCourse(id) {
        const msg = currentLang === 'ar' ? "هل أنت متأكد من حذف هذا المقرر؟" : "Are you sure you want to delete this course?";
        if (confirm(msg)) {
            courses = courses.filter(c => c.id !== id);
            localStorage.setItem('luma_courses', JSON.stringify(courses));
            renderCourses();
        }
    }

    // Initial Render
    renderCourses();

    // --- GPA Optimizer Logic ---
    const calculateBtn = document.querySelector('#gpaOptimizerForm');
    const checkboxesContainer = document.getElementById('activeCoursesCheckboxes');
    const strategyOutput = document.getElementById('strategyOutput');
    const optGpaCanvas = document.getElementById('optGpaChart');
    let optGpaChartInstance;

    // Populate checkboxes from Admin course catalog
    function populateCourseCheckboxes() {
        if (!checkboxesContainer) return;
        checkboxesContainer.innerHTML = '';
        if (courses.length === 0) {
            checkboxesContainer.innerHTML = '<span style="color:var(--text-secondary);font-size:0.9rem;">No courses available. Add courses in Admin Panel.</span>';
            return;
        }
        courses.forEach(c => {
            const label = document.createElement('label');
            label.className = 'checkbox-label';
            label.innerHTML = `
                <input type="checkbox" name="optCourse" value="${c.credits}" data-code="${c.code}" checked>
                <span>${c.code} (${c.credits} cr)</span>
            `;
            checkboxesContainer.appendChild(label);
        });
    }

    populateCourseCheckboxes();

    if (calculateBtn) {
        calculateBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentGpa = parseFloat(document.getElementById('optCurrentGPA').value);
            const targetGpa = parseFloat(document.getElementById('optTargetGPA').value);

            const selectedBoxes = document.querySelectorAll('input[name="optCourse"]:checked');
            const totalCreditsSelected = Array.from(selectedBoxes).reduce((sum, box) => sum + parseInt(box.value), 0);

            const mockCreditsCompleted = 90;
            const totalFutureCredits = totalCreditsSelected || 15;
            const totalCredits = mockCreditsCompleted + totalFutureCredits;

            const requiredGpa = ((targetGpa * totalCredits) - (currentGpa * mockCreditsCompleted)) / totalFutureCredits;

            let strategyHeader, strategyText, cardStyle;
            let courseTargetsHtml = '';

            // If required GPA is slightly above 4.0 but realistically achievable with A+ exceptions, allow up to 4.2
            if (requiredGpa > 4.2 || requiredGpa < 0) {
                strategyHeader = currentLang === 'ar' ? 'هدف غير واقعي حسابياً' : 'Mathematically Impossible Target';
                strategyText = currentLang === 'ar'
                    ? `يتطلب الوصول إلى معدل ${targetGpa} الحصول على معدل ${requiredGpa.toFixed(2)} في المقررات المتبقية. نوصي بتعديل الهدف.`
                    : `Reaching a ${targetGpa} requires a ${requiredGpa.toFixed(2)} in remaining credits, which exceeds the scale. We recommend revising your target.`;
                cardStyle = 'border-left-color: var(--luma-danger);';
            } else {
                if (requiredGpa > 3.8) {
                    strategyHeader = currentLang === 'ar' ? 'ممكن، لكن يتطلب جهداً استثنائياً' : 'Possible, Requires Exceptional Effort';
                    strategyText = currentLang === 'ar'
                        ? `يجب أن يكون معدلك القادم ${requiredGpa.toFixed(2)} كحد أدنى.`
                        : `You need an average of ${requiredGpa.toFixed(2)} in your active courses.`;
                    cardStyle = 'border-left-color: var(--luma-warning);';
                } else {
                    strategyHeader = currentLang === 'ar' ? 'على المسار الصحيح' : 'Highly Achievable Trajectory';
                    strategyText = currentLang === 'ar'
                        ? `أنت بحاجة إلى معدل ${requiredGpa.toFixed(2)} فقط للحفاظ على هدفك.`
                        : `You only need an average of ${requiredGpa.toFixed(2)} across your selected courses to hit your goal.`;
                    cardStyle = '';
                }

                // Generate specific grade targets for each selected course
                if (Array.from(selectedBoxes).length > 0) {
                    courseTargetsHtml += `<div style="margin-top: 1rem; border-top: 1px solid var(--glass-border); padding-top: 1rem;">`;
                    courseTargetsHtml += `<h5 style="margin-bottom: 0.75rem; color: var(--text-primary); font-size: 0.95rem;">${currentLang === 'ar' ? 'الأهداف المطلوبة لكل مقرر:' : 'Required Course Targets:'}</h5>`;
                    courseTargetsHtml += `<ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem;">`;

                    Array.from(selectedBoxes).forEach(box => {
                        const courseCode = box.dataset.code;
                        const courseCredits = box.value;
                        if (courseCode) {
                            // Assign a target grade based on the required GPA run-rate
                            let targetGrade = 'C';
                            let targetTip = currentLang === 'ar' ? 'ركز على الأساسيات.' : 'Focus on the basics.';
                            let gradeColor = 'var(--text-secondary)';

                            if (requiredGpa >= 3.9) { targetGrade = 'A+'; targetTip = currentLang === 'ar' ? 'مراجعة شاملة لجميع المواضيع.' : 'Comprehensive review of all materials.'; gradeColor = 'var(--luma-neom)'; }
                            else if (requiredGpa >= 3.75) { targetGrade = 'A'; targetTip = currentLang === 'ar' ? 'حل اختبارات سابقة للتدريب.' : 'Practice with past exams.'; gradeColor = 'var(--luma-neom)'; }
                            else if (requiredGpa >= 3.0) { targetGrade = 'B+'; targetTip = currentLang === 'ar' ? 'تأكد من فهم المفاهيم الرئيسية.' : 'Ensure grasp of core concepts.'; gradeColor = 'var(--luma-warning)'; }
                            else if (requiredGpa >= 2.5) { targetGrade = 'B'; targetTip = currentLang === 'ar' ? 'حضور الساعات المكتبية.' : 'Attend office hours often.'; gradeColor = 'var(--luma-warning)'; }
                            else if (requiredGpa >= 2.0) { targetGrade = 'C+'; }

                            courseTargetsHtml += `
                            <li style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.02); padding: 0.75rem; border-radius: var(--radius-sm);">
                                <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                                    <strong>${courseCode}</strong>
                                    <span style="font-size: 0.8rem; color: var(--text-secondary);"><i class="fa-solid fa-lightbulb" style="color: ${gradeColor}"></i> ${targetTip}</span>
                                </div>
                                <div style="font-size: 1.25rem; font-weight: bold; color: ${gradeColor};">${targetGrade}</div>
                            </li>`;
                        }
                    });
                    courseTargetsHtml += `</ul></div>`;
                } else {
                    courseTargetsHtml += `<p style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-secondary);"><i class="fa-solid fa-circle-info"></i> ${currentLang === 'ar' ? 'تحديد المقررات الحالية للحصول على تفصيل بالدرجات.' : 'Select active courses to see specific grade targets.'}</p>`;
                }
            }

            // Animate output
            strategyOutput.innerHTML = `
                <div class="strategy-card" style="${cardStyle}">
                    <h4><i class="fa-solid fa-lightbulb"></i> ${strategyHeader}</h4>
                    <p>${strategyText}</p>
                    ${courseTargetsHtml}
                </div>
            `;

            // Render mirrored chart
            renderOptimizerChart(currentGpa, targetGpa, requiredGpa);
        });
    }

    function renderOptimizerChart(current, target, required) {
        if (!optGpaCanvas) return;
        const ctxOpt = optGpaCanvas.getContext('2d');

        // Mock historical data leading up to current
        let dataHist = [current - 0.5, current - 0.2, current];
        let dataProj = [null, null, current, current + ((target - current) / 2), target];

        if (optGpaChartInstance) optGpaChartInstance.destroy();

        optGpaChartInstance = new Chart(ctxOpt, {
            type: 'line',
            data: {
                labels: ['Sem 1', 'Sem 2', 'Current', 'Next', 'Graduation'],
                datasets: [
                    {
                        label: currentLang === 'ar' ? 'التاريخ' : 'History',
                        data: [dataHist[0], dataHist[1], dataHist[2], null, null],
                        borderColor: '#0d9488',
                        borderWidth: 2,
                        pointBackgroundColor: '#0d9488',
                        tension: 0.3
                    },
                    {
                        label: currentLang === 'ar' ? 'المسار المطلوب' : 'Required Path',
                        data: dataProj,
                        borderColor: required > 4.0 ? '#ef4444' : '#8b5cf6',
                        borderDash: [5, 5],
                        borderWidth: 2,
                        pointBackgroundColor: required > 4.0 ? '#ef4444' : '#8b5cf6',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        min: 2.0, max: 4.0,
                        grid: { color: gridColor },
                        ticks: { color: chartTextColor }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: chartTextColor }
                    }
                }
            }
        });
    }

    // --- Wellness Logic ---
    const vibeCheckForm = document.getElementById('vibeCheckForm');
    const stressSlider = document.getElementById('vibeStress');
    const sleepSlider = document.getElementById('vibeSleep');
    const focusSlider = document.getElementById('vibeFocus');

    const stressValOutput = document.getElementById('stressVal');
    const sleepValOutput = document.getElementById('sleepVal');
    const focusValOutput = document.getElementById('focusVal');

    if (vibeCheckForm && stressSlider && sleepSlider && focusSlider) {
        stressSlider.addEventListener('input', (e) => stressValOutput.innerText = e.target.value);
        sleepSlider.addEventListener('input', (e) => sleepValOutput.innerText = e.target.value);
        focusSlider.addEventListener('input', (e) => focusValOutput.innerText = e.target.value);

        vibeCheckForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const st = parseInt(stressSlider.value);
            const sl = parseInt(sleepSlider.value);
            const fo = parseInt(focusSlider.value);

            // Normalize: 
            const stressScore = (11 - st) * 10;
            const sleepScore = sl * 10;
            const focusScore = fo * 10;

            const totalScore = (stressScore + sleepScore + focusScore) / 3;

            setBatteryLevel(Math.round(totalScore));

            // Dynamic Recommendation
            const recommendationDiv = document.getElementById('wellnessRecommendation');
            if (recommendationDiv) {
                let recTitle = '';
                let recBody = '';
                if (totalScore < 40) {
                    recTitle = currentLang === 'ar' ? 'ينصح بأخذ راحة فورية' : 'Immediate Rest Recommended';
                    recBody = currentLang === 'ar' ? 'مستويات التوتر مرتفعة والطاقة منخفضة. خذ استراحة لمدة 20 دقيقة (مشي أو تأمل) قبل البدء بأي جلسة دراسة.' : 'High stress and low energy detected. Take a 20-minute disconnect (walk or meditate) before starting any study session.';
                    recommendationDiv.style.borderLeftColor = 'var(--luma-danger)';
                    recommendationDiv.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
                } else if (totalScore < 70) {
                    recTitle = currentLang === 'ar' ? 'طاقة متوسطة' : 'Moderate Energy';
                    recBody = currentLang === 'ar' ? 'أنت في حالة جيدة ، لكن تجنب المهام المعقدة جداً الآن. ركز على المراجعة الخفيفة أو تلخيص الملاحظات.' : 'You are in a decent state, but avoid heavy deep-work. Focus on light review or organizing notes.';
                    recommendationDiv.style.borderLeftColor = 'var(--luma-warning)';
                    recommendationDiv.style.backgroundColor = 'rgba(245, 158, 11, 0.05)';
                } else {
                    recTitle = currentLang === 'ar' ? 'جاهز للتركيز العميق' : 'Optimum State for Deep Work';
                    recBody = currentLang === 'ar' ? 'هذا هو الوقت المثالي لمعالجة المفاهيم الصعبة أو البدء في مشاريع جديدة. ابدأ جلسة تركيز الآن!' : 'This is the perfect window to tackle difficult concepts or start new projects. Start a Focus Session now!';
                    recommendationDiv.style.borderLeftColor = 'var(--luma-neom)';
                    recommendationDiv.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
                }

                recommendationDiv.innerHTML = `<h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1rem;"><i class="fa-solid fa-lightbulb"></i> ${recTitle}</h4><p style="color: var(--text-secondary); font-size: 0.9rem;">${recBody}</p>`;
                recommendationDiv.classList.remove('hidden');
            }

            const btn = vibeCheckForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>${currentLang === 'ar' ? 'تمت المزامنة بنجاح' : 'Synced Successfully'}</span>`;
            btn.style.backgroundColor = 'var(--luma-neom)';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
            }, 2000);
        });
    }

    // --- Study Resources Filtering Logic ---
    const searchInput = document.getElementById('resourceSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const resourceCards = document.querySelectorAll('.resource-card');

    if (searchInput && filterBtns.length > 0 && resourceCards.length > 0) {

        const filterResources = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

            resourceCards.forEach(card => {
                const title = card.querySelector('h4').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                const category = card.dataset.category;
                const course = card.dataset.course.toLowerCase();

                const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm) || course.includes(searchTerm);
                const matchesFilter = activeFilter === 'all' || category === activeFilter;

                if (matchesSearch && matchesFilter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        searchInput.addEventListener('input', filterResources);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                filterResources();
            });
        });
    }

    // --- Start Session Timer Logic ---
    const startSessionBtn = document.getElementById('startSessionBtn');
    const sessionTimerText = document.getElementById('sessionTimerText');
    let sessionTimerInterval;

    if (startSessionBtn && sessionTimerText) {
        startSessionBtn.addEventListener('click', () => {
            if (sessionTimerInterval) return; // already running

            let timeLeft = 25 * 60; // 25 mins
            startSessionBtn.style.background = 'var(--luma-purple)';

            const updateDisplay = () => {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                sessionTimerText.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            };

            updateDisplay();

            sessionTimerInterval = setInterval(() => {
                timeLeft--;
                updateDisplay();

                if (timeLeft <= 0) {
                    clearInterval(sessionTimerInterval);
                    sessionTimerText.innerText = currentLang === 'ar' ? 'اكتملت الجلسة' : 'Session Complete';
                    startSessionBtn.style.background = '';
                    sessionTimerInterval = null;
                }
            }, 1000);
        });
    }

    // --- View Related Notes Modal Logic ---
    const viewNotesBtn = document.getElementById('viewNotesBtn');
    const notesModalOverlay = document.getElementById('notesModalOverlay');
    const closeNotesBtn = document.getElementById('closeNotesBtn');

    if (viewNotesBtn && notesModalOverlay && closeNotesBtn) {
        viewNotesBtn.addEventListener('click', () => {
            notesModalOverlay.classList.remove('hidden');
        });

        closeNotesBtn.addEventListener('click', () => {
            notesModalOverlay.classList.add('hidden');
        });
    }

    // --- Dark Mode Toggle (Study Mode) ---

    // --- Dark Mode Toggle (Study Mode) ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            body.removeAttribute('data-theme');
            document.getElementById('darkModeText').innerText = translations[currentLang].study_mode;
            darkModeToggle.querySelector('i').className = 'fa-solid fa-moon';
        } else {
            body.setAttribute('data-theme', 'dark');
            document.getElementById('darkModeText').innerText = translations[currentLang].light_mode;
            darkModeToggle.querySelector('i').className = 'fa-solid fa-sun';
        }

        // Re-render chart to update colors based on theme
        if (window.gpaChartInstance) {
            updateChartColors();
            window.gpaChartInstance.update();
        }
    });

    // Auto-trigger dark mode if it's late
    const currentHour = new Date().getHours();
    if (currentHour >= 20 || currentHour < 6) {
        body.setAttribute('data-theme', 'dark');
        const dmText = document.getElementById('darkModeText');
        if (dmText) dmText.innerText = translations[currentLang] ? translations[currentLang].light_mode : 'Light Mode';
        darkModeToggle.querySelector('i').className = 'fa-solid fa-sun';
    }


    // --- User Settings Modal Logic ---
    const userProfileBtn = document.getElementById('userProfileBtn');
    const userSettingsModal = document.getElementById('userSettingsModal');
    const closeSettingsBtn = document.getElementById('closeSettingsBtn');
    const userSettingsForm = document.getElementById('userSettingsForm');

    // DOM Elements to update
    const greetingUser = document.getElementById('greetingUser');
    const displayUserName = document.getElementById('displayUserName');
    const displayUserMajor = document.getElementById('displayUserMajor');
    const avatarLetter = document.getElementById('avatarLetter');
    const trackerCurrentGPA = document.getElementById('trackerCurrentGPA');
    const optCurrentGPA = document.getElementById('optCurrentGPA');

    // Load from local storage or default
    let userProfile = JSON.parse(localStorage.getItem('luma_user_profile')) || {
        name: 'Sarah',
        lastName: 'Jenkins',
        major: 'Computer Science',
        semester: 4,
        gpa: 3.85
    };

    function renderUserProfile() {
        if (!greetingUser) return;

        greetingUser.innerText = currentLang === 'ar' ? `مساء الخير، ${userProfile.name}` : `Good Evening, ${userProfile.name}`;

        // Ensure lastName falls back to Jenkins if missing from old cache
        const lastN = userProfile.lastName || 'Jenkins';
        displayUserName.innerText = `${userProfile.name} ${lastN}`;
        avatarLetter.innerText = userProfile.name.charAt(0).toUpperCase();

        const semText = currentLang === 'ar' ? `الفصل ${userProfile.semester}` : `Sem ${userProfile.semester}`;

        // rudimentary translation for major for demo purposes
        let displayMaj = userProfile.major;
        if (currentLang === 'ar') {
            if (displayMaj.toLowerCase().includes('computer science') || displayMaj.toLowerCase().includes('cs')) displayMaj = 'علوم الحاسب';
            else if (displayMaj.toLowerCase().includes('engineering')) displayMaj = 'هندسة';
            else if (displayMaj.toLowerCase().includes('business')) displayMaj = 'إدارة أعمال';
        }

        displayUserMajor.innerText = `${displayMaj}, ${semText}`;

        trackerCurrentGPA.innerText = userProfile.gpa.toFixed(2);
        if (optCurrentGPA) optCurrentGPA.value = userProfile.gpa.toFixed(2);
    }

    if (userProfileBtn && userSettingsModal) {
        // Init form values
        document.getElementById('setUserName').value = userProfile.name;

        const lastNameInput = document.getElementById('setUserLastName');
        if (lastNameInput) lastNameInput.value = userProfile.lastName || 'Jenkins';

        document.getElementById('setUserMajor').value = userProfile.major;
        document.getElementById('setUserSem').value = userProfile.semester;
        document.getElementById('setUserGPA').value = userProfile.gpa.toFixed(2);

        userProfileBtn.addEventListener('click', () => {
            userSettingsModal.classList.toggle('hidden');
        });

        closeSettingsBtn.addEventListener('click', () => {
            userSettingsModal.classList.add('hidden');
        });

        userSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();

            userProfile.name = document.getElementById('setUserName').value;
            if (lastNameInput) userProfile.lastName = lastNameInput.value;

            userProfile.major = document.getElementById('setUserMajor').value;
            userProfile.semester = parseInt(document.getElementById('setUserSem').value);
            userProfile.gpa = parseFloat(document.getElementById('setUserGPA').value);

            localStorage.setItem('luma_user_profile', JSON.stringify(userProfile));

            renderUserProfile();
            userSettingsModal.classList.add('hidden');

            // trigger recalculation if they were looking at it
            const calculateBtn = document.getElementById('gpaOptimizerForm');
            if (calculateBtn && !document.getElementById('view-optimizer').classList.contains('hidden')) {
                calculateBtn.dispatchEvent(new Event('submit'));
            }
        });

        // Initial render
        renderUserProfile();
    }

    // New Admin Panel Navigation Button Support
    const adminModalBtn = document.getElementById('adminModalBtn');
    if (adminModalBtn) {
        adminModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = adminModalBtn.getAttribute('data-target');

            navLinks.forEach(l => l.classList.remove('active')); // clear sidebar active states

            views.forEach(view => {
                if (view) {
                    view.classList.remove('active');
                    view.classList.add('hidden');
                }
            });

            const activeView = document.getElementById(targetId);
            if (activeView) {
                activeView.classList.remove('hidden');
                activeView.classList.add('active');

                // Animation
                activeView.style.opacity = '0';
                activeView.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    activeView.style.transition = 'all 0.3s ease';
                    activeView.style.opacity = '1';
                    activeView.style.transform = 'translateY(0)';
                }, 50);
            }

            // Close modal after navigating
            if (userSettingsModal) userSettingsModal.classList.add('hidden');
        });
    }

    // Wrap the language toggle specifically around the greeting text update
    const origLangToggleListener = langToggleBtn.onclick; // save previous if needed
    langToggleBtn.addEventListener('click', () => {
        setTimeout(renderUserProfile, 50); // slight delay to wait for currentLang to update
    });

    // --- Smart Pause (Flashcard / Bolt Icon) Logic ---
    const triggerBtn = document.getElementById('triggerPauseBtn');
    const smartPauseOverlay = document.getElementById('smartPauseOverlay');
    const resumeBtn = document.getElementById('resumeBtn');

    if (triggerBtn && smartPauseOverlay && resumeBtn) {
        triggerBtn.addEventListener('click', () => {
            // Drop battery to simulate stress before showing pause
            setBatteryLevel(20);

            setTimeout(() => {
                smartPauseOverlay.classList.remove('hidden');
            }, 600);
        });

        resumeBtn.addEventListener('click', () => {
            smartPauseOverlay.classList.add('hidden');
            setBatteryLevel(85); // Recover battery
        });
    }


    // --- Set Mental Battery Gauge ---
    const setBatteryLevel = (percentage) => {
        const batteryCircle = document.querySelector('.progress');
        const batteryText = document.querySelector('.percentage');
        if (!batteryCircle || !batteryText) return;

        const maxOffset = 282.7; // 2 * pi * r (r=45)
        const offset = maxOffset - (percentage / 100) * maxOffset;
        batteryCircle.style.strokeDashoffset = offset;
        batteryText.innerText = `${percentage}%`;

        const statusSpan = document.querySelector('.battery-text .status');
        let statusKey = '';

        if (percentage > 70) {
            batteryCircle.style.stroke = 'var(--luma-neom)';
            batteryText.style.color = 'var(--luma-neom)';
            statusKey = 'status_optimal';
        } else if (percentage > 30) {
            batteryCircle.style.stroke = 'var(--luma-warning)';
            batteryText.style.color = 'var(--luma-warning)';
            statusKey = 'status_moderate';
        } else {
            batteryCircle.style.stroke = 'var(--luma-danger)';
            batteryText.style.color = 'var(--luma-danger)';
            statusKey = 'status_low';
        }

        if (statusSpan && translations[currentLang][statusKey]) {
            statusSpan.innerText = translations[currentLang][statusKey];
            statusSpan.setAttribute('data-i18n', statusKey);
            statusSpan.style.color = batteryText.style.color;
        }
    };

    setTimeout(() => {
        setBatteryLevel(75);
    }, 500);

    // --- Interactive Buttons Simulation ---
    const navLinks = document.querySelectorAll('.nav-links li');
    const views = document.querySelectorAll('.view-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const targetId = link.getAttribute('data-target');

            views.forEach(view => {
                if (view) {
                    view.classList.remove('active');
                    view.classList.add('hidden');
                }
            });

            const activeView = document.getElementById(targetId);
            if (activeView) {
                activeView.classList.remove('hidden');
                activeView.classList.add('active');

                // Animation
                activeView.style.opacity = '0';
                activeView.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    activeView.style.transition = 'all 0.3s ease';
                    activeView.style.opacity = '1';
                    activeView.style.transform = 'translateY(0)';
                }, 50);
            }

            // Ensure settings modal is closed if navigating away via sidebar
            const userSettingsModalLocal = document.getElementById('userSettingsModal');
            if (userSettingsModalLocal && !userSettingsModalLocal.classList.contains('hidden')) {
                userSettingsModalLocal.classList.add('hidden');
            }
        });
    });



    const optionsBtn = document.querySelector('.widget-header .icon-button');
    if (optionsBtn) {
        optionsBtn.addEventListener('click', () => {
            const icon = optionsBtn.querySelector('i');
            icon.style.transition = 'transform 0.3s ease';
            icon.style.transform = 'rotate(90deg)';

            setTimeout(() => {
                const msg = currentLang === 'ar'
                    ? "قائمة الخيارات: عرض السجل الأكاديمي، تعديل المعدل المستهدف، مشاركة التقرير."
                    : "GPA Options Menu: View Transcript, Edit Target GPA, Share Report.";
                alert(msg);
                icon.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }

    // --- GPA Progression Chart (Chart.js) ---
    const ctx = document.getElementById('gpaChart').getContext('2d');

    let chartTextColor = '#718096';
    let gridColor = 'rgba(0,0,0,0.05)';

    const updateChartColors = () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        chartTextColor = isDark ? '#cbd5e1' : '#718096';
        gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';

        if (window.gpaChartInstance) {
            window.gpaChartInstance.options.scales.x.ticks.color = chartTextColor;
            window.gpaChartInstance.options.scales.y.ticks.color = chartTextColor;
            window.gpaChartInstance.options.scales.x.grid.color = gridColor;
            window.gpaChartInstance.options.scales.y.grid.color = gridColor;
        }
    };

    updateChartColors();

    const data = {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4 (Current)', 'Predicted'],
        datasets: [
            {
                label: 'Cumulative GPA',
                data: [3.5, 3.65, 3.6, 3.85, 4.2],
                borderColor: '#0d9488',
                backgroundColor: 'rgba(13, 148, 136, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#0d9488',
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.4
            },
            {
                label: 'Target Path',
                data: [null, null, null, 3.85, 4.5],
                borderColor: '#8b5cf6',
                borderDash: [5, 5],
                borderWidth: 2,
                pointBackgroundColor: '#8b5cf6',
                pointRadius: 4,
                fill: false,
                tension: 0.1
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 10,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        label: function (context) {
                            return `GPA: ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    min: 2.0,
                    max: 4.0,
                    grid: {
                        color: gridColor,
                        drawBorder: false
                    },
                    ticks: {
                        color: chartTextColor,
                        stepSize: 0.5
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: chartTextColor
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
        }
    };

    window.gpaChartInstance = new Chart(ctx, config);

});
