// Language configuration
// Add new languages here to make them available in settings

export interface LanguageConfig {
    code: string;
    name: string;
    nativeName: string;
    enabled: boolean;
}

export const availableLanguages: LanguageConfig[] = [
    {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        enabled: true
    },
    {
        code: 'et',
        name: 'Estonian',
        nativeName: 'Eesti',
        enabled: true
    },
    {
        code: 'ka',
        name: 'Georgian',
        nativeName: 'ქართული',
        enabled: true
    }
    // Add more languages here when ready:
    // {
    //     code: 'et',
    //     name: 'Estonian',
    //     nativeName: 'Eesti keel',
    //     enabled: true
    // },
    // {
    //     code: 'de',
    //     name: 'German',
    //     nativeName: 'Deutsch',
    //     enabled: true
    // }
];

// Get enabled languages only
export function getEnabledLanguages(): LanguageConfig[] {
    return availableLanguages.filter(lang => lang.enabled);
}

// Check if multiple languages are enabled
export function hasMultipleLanguages(): boolean {
    return getEnabledLanguages().length > 1;
}

// Get language config by code
export function getLanguageConfig(code: string): LanguageConfig | undefined {
    return availableLanguages.find(lang => lang.code === code && lang.enabled);
}

// Get default language
export function getDefaultLanguage(): string {
    const enabledLanguages = getEnabledLanguages();
    return enabledLanguages.length > 0 ? enabledLanguages[0].code : 'en';
}
