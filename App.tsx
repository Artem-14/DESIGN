import { useMemo, useState } from "react";

type IconName =
  | "home"
  | "calendar"
  | "wallet"
  | "chart"
  | "users"
  | "clipboard"
  | "sun"
  | "moon"
  | "chevron"
  | "camera"
  | "snow"
  | "lock"
  | "card"
  | "search"
  | "alert"
  | "close"
  | "mic"
  | "check";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="M3 10.8 12 3l9 7.8" /><path d="M5.5 9.5V21h13V9.5M9.5 21v-7h5v7" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4m8-4v4M3 10h18" /></>,
    wallet: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M16 13h5m-2-2v4M7 9h6" /></>,
    chart: <><path d="M4 20V10m6 10V4m6 16v-7m5 7H2" /></>,
    users: <><circle cx="9" cy="8" r="4" /><path d="M2.5 21c.5-5 2.7-7 6.5-7s6 2 6.5 7M16 4.5a4 4 0 0 1 0 7.5m1.5 3c2.7.5 4 2.5 4 6" /></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2M9 10h6m-6 4h6m-6 4h4" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" /></>,
    moon: <path d="M20.4 15.2A9 9 0 0 1 8.8 3.6 9 9 0 1 0 20.4 15.2Z" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    camera: <><path d="M4 8h3l1.5-2h7L17 8h3v11H4Z" /><circle cx="12" cy="13" r="3.5" /></>,
    snow: <><path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M8 4l4 3 4-3M8 20l4-3 4 3" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    card: <><rect x="2.5" y="5" width="19" height="14" rx="3" /><path d="M2.5 10h19M6 15h4" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    alert: <><path d="M12 3 2.8 20h18.4Z" /><path d="M12 9v5m0 3h.01" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v4m-4 0h8" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Topbar({
  isCoach,
  setIsCoach,
  theme,
  setTheme,
}: {
  isCoach: boolean;
  setIsCoach: (value: boolean) => void;
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
}) {
  return (
    <div className="topbar">
      <button className="identity" onClick={() => setIsCoach(!isCoach)} aria-label="Сменить роль">
        <span className="avatar">{isCoach ? "МК" : "АК"}</span>
        <span>
          <span className="eyebrow">{isCoach ? "Режим тренера" : "Ваш тренер"}</span>
          <span className="identity-name">{isCoach ? "Михаил Крылов" : "Михаил Крылов"}</span>
        </span>
        <Icon name="chevron" size={15} />
      </button>
      <button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Сменить тему">
        <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
      </button>
    </div>
  );
}

const progressBefore = "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900";
const progressAfter = "https://images.unsplash.com/photo-1722925541142-5db2668ca492?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900";

function ClientCabinet() {
  const [split, setSplit] = useState(54);
  const [frozen, setFrozen] = useState(false);
  return (
    <div className="screen">
      <div className={`balance-card ${frozen ? "is-frozen" : ""}`}>
        <div className="balance-top">
          <span className="section-kicker">Баланс абонемента</span>
          <span className="status-dot"><i />{frozen ? "Заморожен" : "Активен"}</span>
        </div>
        <div className="balance-row">
          <span className="balance-value">8</span>
          <span className="balance-label">занятий<br />осталось</span>
        </div>
        <div className="expiry"><span>Действует до</span><strong>24 июня 2025</strong></div>
        {frozen && (
          <div className="freeze-overlay">
            <span className="freeze-icon"><Icon name="snow" size={24} /></span>
            <span><strong>Абонемент на паузе</strong><small>Разморозится через 13 дней 18 часов</small></span>
          </div>
        )}
      </div>

      <div className="section-head">
        <div><span className="section-kicker">Трансформация</span><div className="section-title">Ваш прогресс</div></div>
        <span className="muted-label">90 дней</span>
      </div>
      <div className="progress-card">
        <div className="progress-photo">
          <img src={progressBefore} alt="Фото до начала тренировок" />
          <div className="after-photo" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
            <img src={progressAfter} alt="Фото после тренировок" />
          </div>
          <span className="photo-label before">До</span>
          <span className="photo-label after">После</span>
          <div className="slider-line" style={{ left: `${split}%` }}>
            <span className="slider-handle">‹ ›</span>
          </div>
          <input aria-label="Сравнение фотографий до и после" type="range" min="8" max="92" value={split} onChange={(event) => setSplit(Number(event.target.value))} />
        </div>
        <button className="secondary-button"><Icon name="camera" size={18} />Загрузить новый прогресс</button>
      </div>

      <button className="freeze-button" onClick={() => setFrozen(!frozen)}>
        <span className="freeze-button-icon"><Icon name={frozen ? "check" : "snow"} size={20} /></span>
        <span><strong>{frozen ? "Возобновить абонемент" : "Заморозить на 14 дней"}</strong><small>{frozen ? "Вернуться к тренировкам раньше" : "Доступно 1 раз за пакет"}</small></span>
        <Icon name="chevron" size={18} />
      </button>
    </div>
  );
}

const dates = [
  { day: "Пн", date: "16", month: "июн" },
  { day: "Вт", date: "17", month: "июн" },
  { day: "Ср", date: "18", month: "июн" },
  { day: "Чт", date: "19", month: "июн", blocked: true },
  { day: "Пт", date: "20", month: "июн" },
  { day: "Сб", date: "21", month: "июн" },
  { day: "Вс", date: "22", month: "июн", blocked: true },
];

const times = ["08:00", "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00", "19:30", "21:00"];

function ClientBooking() {
  const [duration, setDuration] = useState("1 час");
  const [date, setDate] = useState("18");
  const [time, setTime] = useState("18:00");
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div className="screen booking-screen">
      <div className="page-heading">
        <span className="section-kicker">Персональная тренировка</span>
        <div className="page-title">Выберите время</div>
      </div>
      <div className="segmented">
        {["1 час", "1.5 часа"].map((item) => <button key={item} className={duration === item ? "active" : ""} onClick={() => setDuration(item)}>{item}</button>)}
      </div>
      <div className="date-scroller">
        {dates.map((item) => (
          <button key={item.date} disabled={item.blocked} className={`date-chip ${date === item.date ? "active" : ""}`} onClick={() => setDate(item.date)}>
            <small>{item.day}</small><strong>{item.date}</strong><span>{item.blocked ? "блок" : item.month}</span>
          </button>
        ))}
      </div>
      <div className="availability">
        <span><i />Доступное время</span>
        <small>Москва, GMT+3</small>
      </div>
      <div className="time-grid">
        {times.map((item, index) => (
          <button key={item} disabled={index === 2 || index === 5} className={time === item ? "active" : ""} onClick={() => { setTime(item); setConfirmed(false); }}>{item}</button>
        ))}
      </div>
      <div className="booking-summary">
        <div><small>Ваша тренировка</small><strong>18 июня, {time}</strong></div>
        <span>{duration}</span>
      </div>
      <button className={`primary-button ${confirmed ? "confirmed" : ""}`} onClick={() => setConfirmed(true)}>
        <Icon name={confirmed ? "check" : "calendar"} size={20} />
        {confirmed ? "Вы записаны" : "Записаться по абонементу"}
      </button>
      <div className="button-note"><Icon name="lock" size={13} /> Списываем 1 занятие после тренировки</div>
    </div>
  );
}

const plans = [
  { type: "Старт", title: "Тест-драйв", count: "1 тренировка", old: "", price: "2 700 ₽", each: "Знакомство с тренером", accent: false },
  { type: "Выбор клиентов", title: "Стандарт", count: "8 тренировок", old: "24 000 ₽", price: "20 800 ₽", each: "2 600 ₽ за тренировку", accent: true },
  { type: "Максимум", title: "Результат", count: "16 тренировок", old: "44 800 ₽", price: "38 400 ₽", each: "2 400 ₽ за тренировку", accent: false },
];

function ClientPlans() {
  const [selected, setSelected] = useState("");
  return (
    <div className="screen">
      <div className="page-heading">
        <span className="section-kicker">Пакеты тренировок</span>
        <div className="page-title">Инвестиция в себя</div>
        <p>Персональный план, контроль техники и измеримый результат.</p>
      </div>
      <div className="plans">
        {plans.map((plan) => (
          <div key={plan.title} className={`plan-card ${plan.accent ? "featured" : ""}`}>
            <div className="plan-top"><span>{plan.type}</span>{plan.accent && <b>ВЫГОДА</b>}</div>
            <div className="plan-title">{plan.title}</div>
            <div className="plan-count">{plan.count}</div>
            <div className="plan-price-row"><strong>{plan.price}</strong>{plan.old && <del>{plan.old}</del>}</div>
            <div className="plan-each">{plan.each}</div>
            <div className="plan-rule" />
            <ul><li><Icon name="check" size={15} /> Индивидуальная программа</li><li><Icon name="check" size={15} /> Замеры и трекинг прогресса</li></ul>
            <button className={plan.accent ? "primary-button" : "secondary-button"} onClick={() => setSelected(plan.title)}>
              {selected === plan.title ? <><Icon name="check" size={18} />Пакет выбран</> : <><Icon name="card" size={18} />Купить пакет</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Revenue() {
  const values = [42, 68, 55, 88, 72];
  return (
    <div className="screen">
      <div className="page-heading coach-heading"><span className="section-kicker">Июнь 2025</span><div className="page-title">Доходы</div></div>
      <div className="revenue-total">
        <span>Общий доход</span>
        <strong>284 600 ₽</strong>
        <small>+18.4% к прошлому месяцу</small>
      </div>
      <div className="source-grid">
        {[
          ["ЮKassa", "126 400 ₽", "purple"],
          ["Сбер", "82 000 ₽", "green"],
          ["Т-Банк", "48 200 ₽", "yellow"],
          ["Наличные", "28 000 ₽", "gray"],
        ].map(([name, value, color]) => <div className="source-card" key={name}><i className={color} /><span>{name}</span><strong>{value}</strong></div>)}
      </div>
      <div className="chart-card">
        <div className="chart-head"><div><span className="section-kicker">Динамика</span><div className="section-title">По неделям</div></div><span className="positive">+18.4%</span></div>
        <div className="bar-chart">
          {values.map((value, index) => <div className="bar-column" key={index}><span style={{ height: `${value}%` }} className={index === 3 ? "peak" : ""}><b>{index === 3 ? "78к" : ""}</b></span><small>{index + 1} нед</small></div>)}
        </div>
      </div>
      <div className="metric-row"><div><span>Средний чек</span><strong>7 490 ₽</strong></div><div><span>Транзакций</span><strong>38</strong></div></div>
    </div>
  );
}

type Client = { initials: string; name: string; balance: number; alert?: boolean; goal: string; color: string };
const clients: Client[] = [
  { initials: "АС", name: "Анна Смирнова", balance: 8, alert: true, goal: "Укрепить спину, улучшить осанку и подготовиться к забегу на 10 км.", color: "violet" },
  { initials: "МК", name: "Максим Ковалёв", balance: 3, goal: "Набор мышечной массы без перегрузки коленных суставов.", color: "blue" },
  { initials: "ЕВ", name: "Елена Волкова", balance: 12, alert: true, goal: "Восстановление после перерыва, развитие общей выносливости.", color: "orange" },
  { initials: "ДА", name: "Дмитрий Алексеев", balance: 1, goal: "Снизить вес на 8 кг и улучшить мобильность.", color: "green" },
  { initials: "ОП", name: "Ольга Петрова", balance: 6, goal: "Силовая подготовка и коррекция техники базовых упражнений.", color: "pink" },
];

function Clients() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Client | null>(null);
  const filtered = useMemo(() => clients.filter((client) => client.name.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <div className="screen">
      <div className="page-heading coach-heading"><span className="section-kicker">CRM</span><div className="page-title">Клиенты <sup>24</sup></div></div>
      <label className="search-box"><Icon name="search" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Имя клиента" /><span>Найти</span></label>
      <div className="client-list">
        {filtered.map((client) => (
          <button className="client-card" key={client.name} onClick={() => setSelected(client)}>
            <span className={`client-avatar ${client.color}`}>{client.initials}</span>
            <span className="client-info"><strong>{client.name}</strong><small>{client.alert ? <><Icon name="alert" size={13} /> Есть противопоказания</> : "Анамнез заполнен"}</small></span>
            <span className="client-balance"><strong>{client.balance}</strong><small>занятий</small></span>
            <Icon name="chevron" size={16} />
          </button>
        ))}
      </div>
      {selected && (
        <div className="sheet-backdrop" onClick={() => setSelected(null)}>
          <div className="bottom-sheet" onClick={(event) => event.stopPropagation()}>
            <div className="sheet-handle" />
            <button className="sheet-close" onClick={() => setSelected(null)}><Icon name="close" size={18} /></button>
            <div className="sheet-person"><span className={`client-avatar ${selected.color}`}>{selected.initials}</span><div><div className="section-title">{selected.name}</div><span>{selected.balance} занятий в балансе</span></div></div>
            <div className="goal-box"><span className="section-kicker">Цель клиента</span><p>{selected.goal}</p></div>
            <div className="sheet-label">Последние тренировки</div>
            <div className="timeline">
              {["Сегодня, 10:00", "12 июня, 18:30", "9 июня, 10:00", "5 июня, 18:30", "2 июня, 12:00"].map((item, index) => <div key={item}><i className={index === 0 ? "active" : ""} /><span>{item}</span><small>{index === 0 ? "Силовая · Верх тела" : "Функциональная · 60 мин"}</small></div>)}
            </div>
            <button className="primary-button">Редактировать анамнез</button>
          </div>
        </div>
      )}
    </div>
  );
}

const sessions = [
  { time: "08:30", name: "Дмитрий Алексеев", detail: "Силовая · 60 мин", done: true },
  { time: "10:00", name: "Анна Смирнова", detail: "Функциональная · 90 мин", current: true, note: "Сегодня без нагрузки на плечо" },
  { time: "13:30", name: "Максим Ковалёв", detail: "Силовая · 60 мин" },
  { time: "17:00", name: "Ольга Петрова", detail: "Мобильность · 60 мин" },
  { time: "19:30", name: "Елена Волкова", detail: "Функциональная · 90 мин" },
];

function Diary() {
  const [complete, setComplete] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div className="screen">
      <div className="page-heading coach-heading"><span className="section-kicker">Среда, 18 июня</span><div className="page-title">Сегодня <sup>5</sup></div></div>
      <div className="day-progress"><span style={{ width: "32%" }} /><small>2 из 5 тренировок</small></div>
      <div className="session-list">
        {sessions.map((session) => (
          <div className={`session-card ${session.current ? "current" : ""} ${session.done ? "done" : ""}`} key={session.time}>
            <div className="session-time">{session.time}<small>{session.done ? "готово" : session.current ? "сейчас" : ""}</small></div>
            <div className="session-main"><strong>{session.name}</strong><span>{session.detail}</span>{session.note && <p>{session.note}</p>}</div>
            {session.done ? <span className="done-mark"><Icon name="check" size={16} /></span> : session.current ? <button className="finish-button" onClick={() => setComplete(true)}>Завершить</button> : <Icon name="chevron" size={16} />}
          </div>
        ))}
      </div>
      <button className="block-day-button"><Icon name="lock" size={18} />Заблокировать остаток дня</button>
      {complete && (
        <div className="sheet-backdrop">
          <div className="bottom-sheet completion-sheet">
            <div className="sheet-handle" />
            <button className="sheet-close" onClick={() => setComplete(false)}><Icon name="close" size={18} /></button>
            <span className="section-kicker">Анна Смирнова · 10:00</span>
            <div className="section-title">Итоги тренировки</div>
            <label className="voice-field"><span>Что делали (программа)</span><textarea placeholder="Упражнения, подходы, веса..." /><button aria-label="Надиктовать программу"><Icon name="mic" size={20} /></button></label>
            <label className="voice-field"><span>Самочувствие клиента</span><textarea placeholder="Нагрузка, пульс, комментарии..." /><button aria-label="Надиктовать самочувствие"><Icon name="mic" size={20} /></button></label>
            <div className="whisper-note"><span className="voice-wave"><i /><i /><i /><i /></span>Можно заполнить голосом</div>
            <button className={`primary-button ${saved ? "confirmed" : ""}`} onClick={() => setSaved(true)}><Icon name={saved ? "check" : "clipboard"} size={19} />{saved ? "Тренировка сохранена" : "Сохранить и завершить"}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Tabbar({ coach, active, setActive }: { coach: boolean; active: number; setActive: (value: number) => void }) {
  const clientTabs: { label: string; icon: IconName }[] = [{ label: "Кабинет", icon: "home" }, { label: "Запись", icon: "calendar" }, { label: "Тарифы", icon: "wallet" }];
  const coachTabs: { label: string; icon: IconName }[] = [{ label: "Доходы", icon: "chart" }, { label: "Клиенты", icon: "users" }, { label: "Дневник", icon: "clipboard" }];
  return (
    <nav className="tabbar">
      {(coach ? coachTabs : clientTabs).map((tab, index) => <button key={tab.label} className={active === index ? "active" : ""} onClick={() => setActive(index)}><span><Icon name={tab.icon} size={21} /></span><small>{tab.label}</small></button>)}
    </nav>
  );
}

export default function App() {
  const [isCoach, setIsCoach] = useState(false);
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const switchRole = (value: boolean) => { setIsCoach(value); setActive(0); };
  const clientScreens = [<ClientCabinet key="cabinet" />, <ClientBooking key="booking" />, <ClientPlans key="plans" />];
  const coachScreens = [<Revenue key="revenue" />, <Clients key="clients" />, <Diary key="diary" />];
  return (
    <main className="app" data-theme={theme}>
      <div className="phone-shell">
        <Topbar isCoach={isCoach} setIsCoach={switchRole} theme={theme} setTheme={setTheme} />
        <div className="content">{isCoach ? coachScreens[active] : clientScreens[active]}</div>
        <Tabbar coach={isCoach} active={active} setActive={setActive} />
      </div>
    </main>
  );
}
