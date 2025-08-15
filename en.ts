export default {
    // App
    app: {
        title: 'Weight Tracker'
    },

    // Pages
    pages: {
        dashboard: {
            title: 'Weight Tracker',
            subtitle: 'Track your weight progress over time'
        }
    },

    // Navigation
    navigation: {
        dashboard: 'Dashboard',
        records: 'Weight Records',
        settings: 'Settings',
        backToDashboard: 'Back to dashboard',
        viewAllRecords: 'View all records',
        openSettings: 'Open settings'
    },

    // Weight Tracking
    weight: {
        weight: 'Weight',
        weightKg: 'Weight (kg)',
        currentWeight: 'Current Weight',
        weightChange: 'Weight Change',
        weightProgress: 'Weight Progress',
        addWeight: 'Add Weight Entry',
        addEntry: 'Add Entry',
        addFirstEntry: 'Add Your First Entry',
        noChange: 'No change',
        firstEntry: 'First entry',
        overallChange: 'Overall change',
        periodChange: 'Period Change',
        totalEntries: 'Total entries',
        dateRange: 'Date range'
    },

    // Forms
    forms: {
        date: 'Date',
        notes: 'Notes',
        optional: 'Optional',
        selectDate: 'Select date',
        addNotes: 'Add notes about your weight entry...',
        editNotes: 'Edit Notes',
        pleaseEnterWeight: 'Please enter your weight',
        pleaseSelectDate: 'Please select a date',
        weightMustBePositive: 'Weight must be a positive number'
    },

    // Records Page
    records: {
        title: 'Weight Records',
        subtitle: 'Track your weight progress over time',
        noRecordsFound: 'No records found',
        noRecordsMessage: 'Start tracking your weight to see records here.',
        allRecords: 'All Records',
        newestFirst: 'Newest first',
        deleteEntry: 'Delete Entry',
        deleteConfirmTitle: 'Delete Weight Entry',
        deleteConfirmMessage: 'Are you sure you want to delete this weight entry? This action cannot be undone.',
        actions: 'Actions'
    },

    // Settings Page
    settings: {
        title: 'Settings',
        subtitle: 'Customize your weight tracking experience',
        
        // Appearance
        appearance: 'Appearance & Preferences',
        theme: 'Theme',
        accentColor: 'Accent Color',
        weightGoal: 'Weight Goal',
        weightLoss: 'Weight Loss',
        weightGain: 'Weight Gain',
        weightLogging: 'Just Logging',
        weightLossDescription: 'Weight decrease shows as positive progress',
        weightGainDescription: 'Weight increase shows as positive progress',
        weightLoggingDescription: 'Weight changes are shown neutrally without color coding',
        
        // Theme Options
        autoTheme: 'Auto (System)',
        lightTheme: 'Light',
        darkTheme: 'Dark',
        
        // Colors
        blue: 'Blue',
        purple: 'Purple',
        red: 'Red',
        pink: 'Pink',
        green: 'Green',
        orange: 'Orange',
        teal: 'Teal',
        custom: 'Custom',
        customColor: 'Custom Color',
        customColorDescription: 'Enter any hex color code (e.g., #3b82f6) to use as your accent color.',
        
        // Data Management
        dataManagement: 'Data Management',
        exportData: 'Export Data',
        exportDescription: 'Download your weight data as a CSV file',
        exportCsv: 'Export CSV',
        importData: 'Import Data',
        importDescription: 'Import weight data from a CSV file',
        importCsv: 'Import CSV',
        currentData: 'Current Data',
        clearAllData: 'Clear All Data',
        clearAllDescription: 'Permanently delete all weight records',
        clearAll: 'Clear All',
        
        // Advanced
        advanced: 'Advanced',
        resetSettings: 'Reset Settings',
        resetSettingsDescription: 'Reset all settings to their default values',
        resetToDefaults: 'Reset to Defaults',
        
        // Language
        language: 'Language',
        languageDescription: 'Select your preferred language'
    },

    // Import/Export
    dataManagement: {
        importCsvData: 'Import CSV Data',
        importFileFormat: 'Select a CSV file with the format: Date, Weight (kg), Notes',
        importButton: 'Import Data',
        exportNoData: 'No data to export. Add some weight entries first.',
        importNoFile: 'Please select a CSV file to import.',
        importSuccess: 'Successfully imported {count} new entries.',
        importSuccessWithDuplicates: 'Successfully imported {newCount} new entries. {duplicateCount} duplicate entries were skipped.',
        importAllDuplicates: 'All entries in the CSV file already exist in your data.',
        importError: 'Failed to import CSV file.',
        clearAllConfirm: 'Are you sure you want to delete ALL weight records? This action cannot be undone.',
        resetSettingsConfirm: 'Are you sure you want to reset all settings to defaults?'
    },

    // Periods
    periods: {
        '7d': '7 days',
        '1m': '1 month',
        '3m': '3 months',
        '6m': '6 months',
        '1y': '1 year',
        'all': 'All time'
    },

    // Short period labels  
    periodsShort: {
        '7d': '7d',
        '1m': '1m',
        '3m': '3m',
        '6m': '6m',
        '1y': '1y',
        'all': 'All'
    },

    // Common
    common: {
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        close: 'Close',
        back: 'Back',
        settings: 'Settings',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        confirm: 'Confirm',
        yes: 'Yes',
        no: 'No',
        kg: 'kg',
        to: 'to',
        entries: 'entries'
    },

    // Calendar
    calendar: {
        today: 'Today',
        months: {
            january: 'January',
            february: 'February',
            march: 'March',
            april: 'April',
            may: 'May',
            june: 'June',
            july: 'July',
            august: 'August',
            september: 'September',
            october: 'October',
            november: 'November',
            december: 'December'
        },
        days: {
            mon: 'Mon',
            tue: 'Tue',
            wed: 'Wed',
            thu: 'Thu',
            fri: 'Fri',
            sat: 'Sat',
            sun: 'Sun'
        }
    },

    // Messages
    messages: {
        weightAdded: 'Weight entry added successfully!',
        weightUpdated: 'Weight entry updated successfully!',
        weightDeleted: 'Weight entry deleted successfully!',
        settingsSaved: 'Settings saved successfully!',
        dataExported: 'Data exported successfully!',
        dataImported: 'Data imported successfully!',
        noDataAvailable: 'No data available for the selected period',
        addSomeEntries: 'Add some weight entries to see your progress'
    },

    // Accessibility
    accessibility: {
        openCalendar: 'Open calendar',
        closeCalendar: 'Close calendar',
        previousMonth: 'Previous month',
        nextMonth: 'Next month',
        closeImportDialog: 'Close import dialog',
        weightEntryClick: 'Weight entry: {weight}kg on {date}. Click to select.',
        deleteThisEntry: 'Delete this entry'
    }
};
