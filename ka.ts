export default {
    // App
    app: {
        title: 'წონის ტრეკერი'
    },

    // Pages
    pages: {
        dashboard: {
            title: 'წონის ტრეკერი',
            subtitle: 'თქვენი წონის პროგრესის თვალყურდევნება დროის განმავლობაში'
        }
    },

    // Navigation
    navigation: {
        dashboard: 'მთავარი',
        records: 'წონის ჩანაწერები',
        settings: 'პარამეტრები',
        backToDashboard: 'მთავარ გვერდზე დაბრუნება',
        viewAllRecords: 'ყველა ჩანაწერის ნახვა',
        openSettings: 'პარამეტრების გახსნა'
    },

    // Weight Tracking
    weight: {
        weight: 'წონა',
        weightKg: 'წონა (კგ)',
        currentWeight: 'მიმდინარე წონა',
        weightChange: 'წონის ცვლილება',
        weightProgress: 'წონის პროგრესი',
        addWeight: 'წონის ჩანაწერის დამატება',
        addEntry: 'ჩანაწერის დამატება',
        addFirstEntry: 'თქვენი პირველი ჩანაწერის დამატება',
        noChange: 'ცვლილება არ არის',
        firstEntry: 'პირველი ჩანაწერი',
        overallChange: 'მთლიანი ცვლილება',
        periodChange: 'პერიოდის ცვლილება',
        totalEntries: 'სულ ჩანაწერები',
        dateRange: 'თარიღების დიაპაზონი'
    },

    // Forms
    forms: {
        date: 'თარიღი',
        notes: 'შენიშვნები',
        optional: 'არასავალდებულო',
        selectDate: 'თარიღის არჩევა',
        addNotes: 'დაამატეთ შენიშვნები თქვენი წონის ჩანაწერის შესახებ...',
        editNotes: 'შენიშვნების რედაქტირება',
        pleaseEnterWeight: 'გთხოვთ შეიყვანოთ წონა',
        pleaseEnterDate: 'გთხოვთ შეიყვანოთ თარიღი',
        pleaseEnterValidWeight: 'გთხოვთ შეიყვანოთ მართებული წონა',
        pleaseEnterValidDate: 'გთხოვთ შეიყვანოთ მართებული თარიღი',
        weightRequired: 'წონა აუცილებელია',
        dateRequired: 'თარიღი აუცილებელია',
        invalidWeight: 'არასწორი წონა',
        invalidDate: 'არასწორი თარიღი',
        weightMustBePositive: 'წონა დადებითი უნდა იყოს',
        dateMustBeValid: 'თარიღი მართებული უნდა იყოს'
    },

    // Settings
    settings: {
        title: 'პარამეტრები',
        
        // Appearance
        appearance: 'გარეგნობა და პრეფერენციები',
        theme: 'თემა',
        accentColor: 'მთავარი ფერი',
        weightGoal: 'წონის მიზანი',
        weightLoss: 'წონის დაკლება',
        weightGain: 'წონის მომატება',
        weightLogging: 'უბრალო ლოგირება',
        weightLossDescription: 'წონის შემცირება გამოისახება როგორც დადებითი პროგრესი',
        weightGainDescription: 'წონის მომატება გამოისახება როგორც დადებითი პროგრესი',
        weightLoggingDescription: 'წონის ცვლილებები ნეიტრალურად გამოისახება ფერის კოდირების გარეშე',
        
        // Theme Options
        autoTheme: 'ავტო (სისტემური)',
        lightTheme: 'ღია',
        darkTheme: 'მუქი',
        
        // Colors
        blue: 'ლურჯი',
        purple: 'იასამნისფერი',
        red: 'წითელი',
        pink: 'ვარდისფერი',
        green: 'მწვანე',
        orange: 'ნარინჯისფერი',
        teal: 'ზღვისფერი',
        custom: 'მორგებული',
        customColor: 'მორგებული ფერი',
        customColorDescription: 'შეიყვანეთ ნებისმიერი hex ფერის კოდი (მაგ., #3b82f6) მთავარ ფერად გამოსაყენებლად.',
        
        // Data Management
        dataManagement: 'მონაცემების მართვა',
        exportData: 'მონაცემების ექსპორტი',
        exportDescription: 'ჩამოტვირთეთ თქვენი წონის მონაცემები CSV ფაილის სახით',
        exportCsv: 'CSV ექსპორტი',
        importData: 'მონაცემების იმპორტი',
        importDescription: 'იმპორტი წონის მონაცემების CSV ფაილიდან',
        importCsv: 'CSV იმპორტი',
        currentData: 'მიმდინარე მონაცემები',
        clearAllData: 'ყველა მონაცემის წაშლა',
        clearAllDescription: 'მუდმივად წაშლეთ ყველა წონის ჩანაწერი',
        clearAll: 'ყველას წაშლა',
        
        // Advanced
        advanced: 'გაფართოებული',
        resetSettings: 'პარამეტრების განულება',
        resetSettingsDescription: 'ყველა პარამეტრის ნაგულისხმევ მნიშვნელობებზე დაბრუნება',
        resetToDefaults: 'ნაგულისხმევზე დაბრუნება',
        
        // Language
        language: 'ენა',
        languageDescription: 'აირჩიეთ თქვენი სასურველი ენა'
    },

    // Import/Export
    dataManagement: {
        importCsvData: 'CSV მონაცემების იმპორტი',
        importFileFormat: 'აირჩიეთ CSV ფაილი ფორმატით: თარიღი, წონა (კგ), შენიშვნები',
        importButton: 'მონაცემების იმპორტი',
        exportNoData: 'ექსპორტისთვის მონაცემები არ არის. ჯერ დაამატეთ წონის ჩანაწერები.',
        importNoFile: 'გთხოვთ აირჩიოთ CSV ფაილი იმპორტისთვის.',
        importSuccess: 'წარმატებით იქნა იმპორტირებული {count} ახალი ჩანაწერი.',
        importSuccessWithDuplicates: 'წარმატებით იქნა იმპორტირებული {newCount} ახალი ჩანაწერი. {duplicateCount} დუბლირებული ჩანაწერი გამოტოვებული იქნა.',
        importAllDuplicates: 'CSV ფაილში მოცემული ყველა ჩანაწერი უკვე არსებობს თქვენს მონაცემებში.',
        importError: 'CSV ფაილის იმპორტი ვერ შესრულდა.',
        clearAllConfirm: 'დარწმუნებული ხართ, რომ გსურთ ყველა წონის ჩანაწერის წაშლა? ეს მოქმედება ვერ გაუქმდება.',
        resetSettingsConfirm: 'დარწმუნებული ხართ, რომ გსურთ ყველა პარამეტრის ნაგულისხმევ მნიშვნელობებზე დაბრუნება?'
    },

    // Periods
    periods: {
        '7d': '7 დღე',
        '1m': '1 თვე',
        '3m': '3 თვე',
        '6m': '6 თვე',
        '1y': '1 წელი',
        'all': 'მთელი დრო'
    },

    // Short period labels
    periodsShort: {
        '7d': '7დ',
        '1m': '1თ',
        '3m': '3თ',
        '6m': '6თ',
        '1y': '1წ',
        'all': 'ყველა'
    },

    // Common
    common: {
        save: 'შენახვა',
        cancel: 'გაუქმება',
        delete: 'წაშლა',
        edit: 'რედაქტირება',
        close: 'დახურვა',
        back: 'უკან',
        settings: 'პარამეტრები',
        loading: 'იტვირთება...',
        error: 'შეცდომა',
        success: 'წარმატება',
        confirm: 'დადასტურება',
        yes: 'კი',
        no: 'არა',
        kg: 'კგ',
        to: 'მდე',
        entries: 'ჩანაწერები'
    },

    // Calendar
    calendar: {
        today: 'დღეს',
        months: {
            january: 'იანვარი',
            february: 'თებერვალი',
            march: 'მარტი',
            april: 'აპრილი',
            may: 'მაისი',
            june: 'ივნისი',
            july: 'ივლისი',
            august: 'აგვისტო',
            september: 'სექტემბერი',
            october: 'ოქტომბერი',
            november: 'ნოემბერი',
            december: 'დეკემბერი'
        },
        days: {
            mon: 'ორშ',
            tue: 'სამ',
            wed: 'ოთხ',
            thu: 'ხუთ',
            fri: 'პარ',
            sat: 'შაბ',
            sun: 'კვი'
        }
    },

    // Messages
    messages: {
        weightAdded: 'წონის ჩანაწერი წარმატებით დაემატა!',
        weightUpdated: 'წონის ჩანაწერი წარმატებით განახლდა!',
        weightDeleted: 'წონის ჩანაწერი წარმატებით წაიშალა!',
        settingsSaved: 'პარამეტრები წარმატებით შეინახა!',
        dataExported: 'მონაცემები წარმატებით ექსპორტირდა!',
        dataImported: 'მონაცემები წარმატებით იმპორტირდა!',
        noDataAvailable: 'მონაცემები მიუწვდომელია არჩეული პერიოდისთვის',
        addSomeEntries: 'დაამატეთ წონის ჩანაწერები თქვენი პროგრესის სანახავად'
    },

    // Accessibility
    accessibility: {
        openCalendar: 'კალენდრის გახსნა',
        closeCalendar: 'კალენდრის დახურვა',
        previousMonth: 'წინა თვე',
        nextMonth: 'შემდეგი თვე',
        closeImportDialog: 'იმპორტის დიალოგის დახურვა',
        weightEntryClick: 'წონის ჩანაწერი: {weight}კგ {date} თარიღზე. დააწკაპუნეთ არჩევისთვის.',
        deleteThisEntry: 'ამ ჩანაწერის წაშლა'
    }
};
