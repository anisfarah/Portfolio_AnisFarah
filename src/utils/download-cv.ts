/**
 * Utility function to get the correct CV file based on the current language
 * and handle the download
 */

type Language = 'en' | 'fr';

/**
 * Gets the appropriate CV file path based on the current language
 * @param language - Current language ('en' or 'fr')
 * @returns CV file path
 */
export function getCVPath(language: Language): string {
  // Prefer user's files if present, otherwise fallback to default ones in repo
  return language === 'fr' ? '/CV_AnisFarah_FR.pdf' : '/CV_AnisFarah_Ang.pdf';
}

/**
 * Gets the appropriate CV filename for download based on the current language
 * @param language - Current language ('en' or 'fr')
 * @returns CV filename for download
 */
export function getCVFilename(language: Language): string {
  return language === 'fr' ? 'Anis_FARAH_CV_Francais.pdf' : 'Anis_FARAH_Resume_English.pdf';
}

/**
 * Downloads the appropriate CV based on the current language
 * @param language - Current language ('en' or 'fr')
 */
export function downloadCV(language: Language): void {
  const preferred = getCVPath(language);
  const fallback = language === 'fr' ? '/resume-fr.pdf' : '/resume-en.pdf';

  // Try preferred path first; if missing, fallback silently
  fetch(preferred, { method: 'HEAD' })
    .then((res) => {
      const href = res.ok ? preferred : fallback;
      const link = document.createElement('a');
      link.href = href;
      link.download = getCVFilename(language);
      link.click();
    })
    .catch(() => {
      const link = document.createElement('a');
      link.href = fallback;
      link.download = getCVFilename(language);
      link.click();
    });
} 