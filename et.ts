export default {
    // App
    app: {
        title: 'Kaaluarvestus'
    },

    // Pages
    pages: {
        dashboard: {
            title: 'Kaaluarvestus',
            subtitle: 'Jälgi oma kaalu progressi aja jooksul'
        }
    },

    // Navigation
    navigation: {
        dashboard: 'Avaleht',
        records: 'Kirjed',
        settings: 'Seaded',
        backToDashboard: 'Tagasi avalehele',
        viewAllRecords: 'Vaata kõiki kirjeid',
        openSettings: 'Ava seaded'
    },

    // Weight Tracking
    weight: {
        weight: 'Kaal',
        weightKg: 'Kaal (kg)',
        currentWeight: 'Praegune kaal',
        weightChange: 'Kaalu muutus',
        weightProgress: 'Kaalu progress',
        addWeight: 'Lisa kaal',
        addEntry: 'Lisa kirje',
        addFirstEntry: 'Lisa oma esimene kirje',
        noChange: 'Muutust pole',
        firstEntry: 'Esimene kirje',
        overallChange: 'Kogu muutus',
        periodChange: 'Perioodi muutus',
        totalEntries: 'Kirjeid kokku',
        dateRange: 'Kuupäevavahemik'
    },

    // Forms
    forms: {
        date: 'Kuupäev',
        notes: 'Märkused',
        optional: 'Valikuline',
        selectDate: 'Vali kuupäev',
        addNotes: 'Lisa märkusi oma kaalukirje kohta...',
        editNotes: 'Muuda märkusi',
        pleaseEnterWeight: 'Palun sisesta oma kaal',
        pleaseSelectDate: 'Palun vali kuupäev',
        weightMustBePositive: 'Kaal peab olema positiivne arv'
    },

    // Records Page
    records: {
        title: 'Kaalukirjed',
        subtitle: 'Jälgi oma kaalu progressi aja jooksul',
        noRecordsFound: 'Kirjeid ei leitud',
        noRecordsMessage: 'Alusta oma kaalu jälgimist, et siin kirjeid näha.',
        allRecords: 'Kõik kirjed',
        newestFirst: 'Uusimad esmalt',
        deleteEntry: 'Kustuta kirje',
        deleteConfirmTitle: 'Kustuta kaalukirje',
        deleteConfirmMessage: 'Kas oled kindel, et soovid selle kaalukirje kustutada? Seda tegevust ei saa tagasi võtta.',
        actions: 'Tegevused'
    },

    // Settings Page
    settings: {
        title: 'Seaded',
        subtitle: 'Kohanda oma kaaluarvestuse kogemust',
        
        // Appearance
        appearance: 'Välimus ja eelistused',
        theme: 'Teema',
        accentColor: 'Rõhuvärv',
        weightGoal: 'Kaalueeesmärk',
        weightLoss: 'Kaalukaotus',
        weightGain: 'Kaalutõus',
        weightLogging: 'Lihtsalt loggimine',
        weightLossDescription: 'Kaalu vähenemine näidatakse positiivse progressina',
        weightGainDescription: 'Kaalu suurenemine näidatakse positiivse progressina',
        weightLoggingDescription: 'Kaalumuutused näidatakse neutraalselt ilma värvikoodideta',
        
        // Theme Options
        autoTheme: 'Automaatne',
        lightTheme: 'Hele',
        darkTheme: 'Tume',
        
        // Colors
        blue: 'Sinine',
        purple: 'Lilla',
        red: 'Punane',
        pink: 'Roosa',
        green: 'Roheline',
        orange: 'Oranž',
        teal: 'Teal',
        custom: 'Kohandatud',
        customColor: 'Kohandatud värv',
        customColorDescription: 'Sisesta mis tahes hex värvikoodi (nt #3b82f6) oma rõhuvärvi jaoks.',
        
        // Data Management
        dataManagement: 'Andmehaldus',
        exportData: 'Ekspordi andmed',
        exportDescription: 'Laadi oma kaaluandmed alla CSV-failina',
        exportCsv: 'Ekspordi CSV',
        importData: 'Impordi andmed',
        importDescription: 'Impordi kaaluandmed CSV-failist',
        importCsv: 'Impordi CSV',
        currentData: 'Praegused andmed',
        clearAllData: 'Kustuta kõik andmed',
        clearAllDescription: 'Kustuta jäädavalt kõik kaalukirjed',
        clearAll: 'Kustuta kõik',
        
        // Advanced
        advanced: 'Täpsemad seaded',
        resetSettings: 'Lähtesta seaded',
        resetSettingsDescription: 'Lähtesta kõik seaded vaikimisi väärtustele',
        resetToDefaults: 'Lähtesta vaikimisi',
        
        // Language
        language: 'Keel',
        languageDescription: 'Vali oma eelistatud keel'
    },

    // Import/Export
    dataManagement: {
        importCsvData: 'Impordi CSV andmed',
        importFileFormat: 'Vali CSV-fail formaadis: Kuupäev, Kaal (kg), Märkused',
        importButton: 'Impordi andmed',
        exportNoData: 'Andmeid pole eksportimiseks. Lisa esmalt mõned kaalukirjed.',
        importNoFile: 'Palun vali imporditav CSV-fail.',
        importSuccess: 'Edukalt imporditud {count} uut kirjet.',
        importSuccessWithDuplicates: 'Edukalt imporditud {newCount} uut kirjet. {duplicateCount} duplikaatkirjet jäeti vahele.',
        importAllDuplicates: 'Kõik CSV-failis olevad kirjed on juba sinu andmetes olemas.',
        importError: 'CSV-faili importimine ebaõnnestus.',
        clearAllConfirm: 'Kas oled kindel, et soovid KÕIK kaalukirjed kustutada? Seda tegevust ei saa tagasi võtta.',
        resetSettingsConfirm: 'Kas oled kindel, et soovid kõik seaded vaikimisi väärtustele lähtestada?'
    },

    // Periods
    periods: {
        '7d': '7 päeva',
        '1m': '1 kuu',
        '3m': '3 kuud',
        '6m': '6 kuud',
        '1y': '1 aasta',
        'all': 'Kogu aeg'
    },

    // Short period labels
    periodsShort: {
        '7d': '7p',
        '1m': '1k',
        '3m': '3k',
        '6m': '6k',
        '1y': '1a',
        'all': 'Kõik'
    },

    // Common
    common: {
        save: 'Salvesta',
        cancel: 'Tühista',
        delete: 'Kustuta',
        edit: 'Muuda',
        close: 'Sulge',
        back: 'Tagasi',
        settings: 'Seaded',
        loading: 'Laadimine...',
        error: 'Viga',
        success: 'Õnnestus',
        confirm: 'Kinnita',
        yes: 'Jah',
        no: 'Ei',
        kg: 'kg',
        to: 'kuni',
        entries: 'kirjeid'
    },

    // Calendar
    calendar: {
        today: 'Täna',
        months: {
            january: 'Jaanuar',
            february: 'Veebruar',
            march: 'Märts',
            april: 'Aprill',
            may: 'Mai',
            june: 'Juuni',
            july: 'Juuli',
            august: 'August',
            september: 'September',
            october: 'Oktoober',
            november: 'November',
            december: 'Detsember'
        },
        days: {
            mon: 'E',
            tue: 'T',
            wed: 'K',
            thu: 'N',
            fri: 'R',
            sat: 'L',
            sun: 'P'
        }
    },

    // Messages
    messages: {
        weightAdded: 'Kaalukirje edukalt lisatud!',
        weightUpdated: 'Kaalukirje edukalt uuendatud!',
        weightDeleted: 'Kaalukirje edukalt kustutatud!',
        settingsSaved: 'Seaded edukalt salvestatud!',
        dataExported: 'Andmed edukalt eksporditud!',
        dataImported: 'Andmed edukalt imporditud!',
        noDataAvailable: 'Valitud perioodil andmed puuduvad',
        addSomeEntries: 'Lisa mõned kaalukirjed, et näha oma progressi'
    },

    // Accessibility
    accessibility: {
        openCalendar: 'Ava kalender',
        closeCalendar: 'Sulge kalender',
        previousMonth: 'Eelmine kuu',
        nextMonth: 'Järgmine kuu',
        closeImportDialog: 'Sulge importimise dialoog',
        weightEntryClick: 'Kaalukirje: {weight}kg kuupäeval {date}. Klõpsa valimiseks.',
        deleteThisEntry: 'Kustuta see kirje'
    }
};
