import { QUESTIONS } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem('app_lang') || 'ru';
    let currentCategory = 'basic-types';
    let answered = {};
    let correctCount = 0;
    let wrongCount = 0;
    setLang(lang);

    // --- НАВЕШИВАНИЕ СОБЫТИЙ (КЛИКОВ) ИЗ JS ---

    // 1. Клики по переключателю языков
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.currentTarget.dataset.lang;
            setLang(selectedLang);
        });
    });

    // 2. Клик по кнопке "Пройти снова"
    document.getElementById('btn-restart').addEventListener('click', () => {
        restartQuiz();
    });

    // 3. Делегирование кликов для категорий (так как табы создаются динамически)
    document.getElementById('cat-tabs').addEventListener('click', (e) => {
        const tab = e.target.closest('.cat-tab');
        if (tab) {
            const category = tab.dataset.category;
            setCategory(category);
        }
    });

    // 4. Делегирование кликов для кнопок ответов (так как вопросы создаются динамически)
    document.getElementById('quiz-area').addEventListener('click', (e) => {
        const btn = e.target.closest('.option-btn');
        if (btn) {
            const qId = parseInt(btn.dataset.qid);
            const optIdx = parseInt(btn.dataset.idx);
            answer(qId, optIdx);
        }
    });

    // --- ОСНОВНАЯ ЛОГИКА ---

    function setLang(l) {
        lang = l;
        localStorage.setItem('app_lang', l);
        document.getElementById('btn-en').classList.toggle('active', l === 'en');
        document.getElementById('btn-ru').classList.toggle('active', l === 'ru');
        document.getElementById('btn-ka').classList.toggle('active', l === 'ka');
        document.querySelectorAll('.lang-key').forEach(el => {
            el.textContent = el.dataset[l] || el.dataset.ru;
        });
        renderAll();
    }

    function getCategories() {
        const map = {};
        QUESTIONS.forEach(q => {
            const key = q.tag;
            if (!map[key]) map[key] = { tag: key, ru: q.category.ru, en: q.category.en, ka: q.category.ka, count: 0 };
            map[key].count++;
        });
        return Object.values(map);
    }

    function renderCategoryTabs() {
        const cats = getCategories();
        const total = QUESTIONS.length;
        const container = document.getElementById('cat-tabs');

        // let allLabel = 'Все';
        // if (lang === 'en') allLabel = 'All';
        // if (lang === 'ka') allLabel = 'ყველა';
        let html = '';
        // ИЗМЕНЕНО: вместо onclick используем data-category
        //         let html = `<button class="cat-tab ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
        //     ${allLabel} <span class="cat-count">${total}</span>
        //   </button>`;

        cats.forEach(c => {
            let label = c.ru;
            if (lang === 'en') label = c.en;
            if (lang === 'ka') label = c.ka;

            // ИЗМЕНЕНО: вместо onclick используем data-category
            html += `<button class="cat-tab ${currentCategory === c.tag ? 'active' : ''}" data-category="${c.tag}">
      ${label} <span class="cat-count">${c.count}</span>
    </button>`;
        });
        container.innerHTML = html;
    }

    function setCategory(cat) {
        currentCategory = cat;
        renderAll();
    }

    function getFilteredQuestions() {
        // if (currentCategory === 'all') return QUESTIONS;
        return QUESTIONS.filter(q => q.tag === currentCategory);
    }

    function updateProgress() {
        const filtered = getFilteredQuestions();
        const answeredCount = filtered.filter(q => answered[q.id]).length;
        const total = filtered.length;
        const pct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

        document.getElementById('progress-text').textContent = `${answeredCount} / ${total}`;
        document.getElementById('progress-bar').style.width = pct + '%';
        document.getElementById('score-correct').textContent = `✓ ${correctCount}`;
        document.getElementById('score-wrong').textContent = `✗ ${wrongCount}`;
    }

    function checkComplete() {
        const filtered = getFilteredQuestions();
        const allDone = filtered.every(q => answered[q.id]);
        if (allDone && filtered.length > 0) {
            showResults(filtered);
        }
    }

    function showResults(filtered) {
        document.getElementById('quiz-area').style.display = 'none';
        const rs = document.getElementById('results-screen');
        rs.classList.add('show');

        const total = filtered.length;
        const correct = filtered.filter(q => answered[q.id]?.isCorrect).length;
        const wrong = total - correct;
        const pct = Math.round((correct / total) * 100);

        document.getElementById('res-total').textContent = total;
        document.getElementById('res-correct').textContent = correct;
        document.getElementById('res-wrong').textContent = wrong;
        document.getElementById('res-pct').textContent = pct + '%';

        let trophy, title, subtitle, rank;

        if (pct === 100) {
            trophy = '🏆';
            title = { ru: 'Идеальный результат!', en: 'Perfect Score!', ka: 'იდეალური შედეგი!' }[lang];
            subtitle = { ru: 'Ты знаешь TypeScript на экспертном уровне.', en: 'You know TypeScript at an expert level.', ka: 'შენ იცი TypeScript ექსპერტის დონეზე.' }[lang];
            rank = '🥇 TypeScript Expert';
        } else if (pct >= 80) {
            trophy = '🎯';
            title = { ru: 'Отличный результат!', en: 'Excellent Result!', ka: 'ბრწყინვალე შედეგი!' }[lang];
            subtitle = { ru: 'Ты очень хорошо знаешь тему. Изучи пропущенные нюансы.', en: 'Strong TypeScript knowledge. Review the missed topics.', ka: 'შენ ძალიან კარგად იცი ეს თემა. გადახედე გამოტოვებულ ნიუანსებს.' }[lang];
            rank = '🥈 Senior TypeScript Developer';
        } else if (pct >= 60) {
            trophy = '📚';
            title = { ru: 'Неплохо!', en: 'Good progress!', ka: 'არაჩვეულებრივია!' }[lang];
            subtitle = { ru: 'База прочная, но сложные фичи требуют закрепления.', en: 'Solid basics, but advanced features need more study.', ka: 'ბაზა მყარია, თუმცა რთული ფუნქციები საჭიროებს გამეორებას.' }[lang];
            rank = '🥉 Mid-level Developer';
        } else {
            trophy = '💪';
            title = { ru: 'Есть куда расти!', en: 'Room to grow!', ka: 'არის ზრდის პოტენციალი!' }[lang];
            subtitle = { ru: 'Продолжай практиковаться и читать доки — всё получится!', en: 'Keep studying TypeScript — practice makes perfect.', ka: 'გააგრძელე პრაქტიკა და დოკუმენტაციის კითხვა — ყველაფერი გამოვა!' }[lang];
            rank = '📖 TypeScript Learner';
        }

        document.getElementById('results-trophy').textContent = trophy;
        document.getElementById('results-title').textContent = title;
        document.getElementById('results-subtitle').textContent = subtitle;
        document.getElementById('results-rank').textContent = rank;
    }

    function renderQuestions() {
        const filtered = getFilteredQuestions();
        const container = document.getElementById('quiz-area');
        container.style.display = 'block';
        document.getElementById('results-screen').classList.remove('show');

        let html = '';
        filtered.forEach((q, idx) => {
            const state = answered[q.id];
            const cardClass = state ? (state.isCorrect ? 'correct' : 'wrong') : '';
            const questionText = q.question[lang] || q.question.ru;
            const catLabel = q.category[lang] || q.category.ru;

            html += `<div class="question-card ${cardClass}" id="card-${q.id}">
      <div class="q-header">
        <span class="q-num">#${String(idx + 1).padStart(2, '0')}</span>
        <span class="q-text">${questionText}</span>
        <span class="q-tag">${catLabel}</span>
      </div>`;

            if (q.code) {
                html += `<div class="q-code">${q.code}</div>`;
            }

            html += `<div class="q-options">`;
            const letters = ['A', 'B', 'C', 'D'];
            q.options.forEach((opt, i) => {
                let btnClass = '';
                let disabled = '';
                if (state) {
                    disabled = 'disabled';
                    if (i === state.chosen && state.isCorrect) btnClass = 'selected-correct';
                    else if (i === state.chosen && !state.isCorrect) btnClass = 'selected-wrong';
                    else if (i === q.correct) btnClass = 'show-correct';
                }
                const optText = opt[lang] || opt.ru;

                // ИЗМЕНЕНО: вместо onclick добавили data-qid и data-idx
                html += `<button class="option-btn ${btnClass}" ${disabled} data-qid="${q.id}" data-idx="${i}">
        <span class="opt-letter">${letters[i]}</span>
        <span>${optText}</span>
      </button>`;
            });
            html += `</div>`;

            if (state) {
                const explanation = q.explanation[lang] || q.explanation.ru;
                const isCorrect = state.isCorrect;
                const fbClass = isCorrect ? 'correct-fb' : 'wrong-fb';
                const fbIcon = isCorrect ? '✅' : '❌';

                let fbTitle = 'Правильно!';
                if (!isCorrect) fbTitle = { ru: 'Неправильно', en: 'Wrong', ka: 'არასწორია' }[lang];
                else fbTitle = { ru: 'Правильно!', en: 'Correct!', ka: 'სწორია!' }[lang];

                let docsLabel = { ru: '📖 Документация TypeScript', en: '📖 TypeScript Documentation', ka: '📖 TypeScript დოკუმენტაცია' }[lang];

                html += `<div class="feedback-panel ${fbClass}">
        <div class="fb-header">
          <span class="fb-icon">${fbIcon}</span>
          <span class="fb-title">${fbTitle}</span>
        </div>
        <div class="fb-body">
          <p class="fb-explanation">${explanation}</p>
          <a href="${q.docLink}" target="_blank" class="fb-link">
            <span class="fb-link-icon">🔗</span>
            ${q.docLabel || docsLabel}
          </a>
        </div>
      </div>`;
            }

            html += `</div>`;
        });

        container.innerHTML = html;
        updateProgress();
    }

    function answer(questionId, chosenIdx) {
        if (answered[questionId]) return;
        const q = QUESTIONS.find(x => x.id === questionId);
        if (!q) return;
        const isCorrect = chosenIdx === q.correct;
        answered[questionId] = { chosen: chosenIdx, isCorrect };
        if (isCorrect) correctCount++;
        else wrongCount++;
        renderAll();
        checkComplete();
    }

    function restartQuiz() {
        answered = {};
        correctCount = 0;
        wrongCount = 0;
        // currentCategory = 'all';
        renderAll();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderAll() {
        renderCategoryTabs();
        renderQuestions();
        // updateProgress();

        const cats = getCategories();
        document.getElementById('total-count').textContent = QUESTIONS.length;
        document.getElementById('cat-count').textContent = cats.length;
    }


});