import React from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// A broad list including major African languages and beyond. You can expand this.
const LANGUAGES: { code: string; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "sw", label: "Kiswahili" },
  { code: "yo", label: "Yorùbá" },
  { code: "ig", label: "Igbo" },
  { code: "ha", label: "Hausa" },
  { code: "am", label: "Amharic" },
  { code: "ar", label: "العربية" },
  { code: "zu", label: "isiZulu" },
  { code: "xh", label: "isiXhosa" },
  { code: "st", label: "Sesotho" },
  { code: "tn", label: "Setswana" },
  { code: "nso", label: "Sesotho sa Leboa" },
  { code: "ts", label: "Xitsonga" },
  { code: "ve", label: "Tshivenda" },
  { code: "nd", label: "isiNdebele" },
  { code: "rw", label: "Kinyarwanda" },
  { code: "rn", label: "Kirundi" },
  { code: "lg", label: "Luganda" },
  { code: "so", label: "Af-Soomaali" },
  { code: "sn", label: "ChiShona" },
  { code: "mg", label: "Malagasy" },
  { code: "om", label: "Oromoo" },
  { code: "ti", label: "ትግርኛ (Tigrinya)" },
  { code: "wo", label: "Wolof" },
  { code: "ff", label: "Fulah" },
  { code: "ee", label: "Eʋegbe (Ewe)" },
  { code: "ak", label: "Akan/Twi" },
  { code: "ln", label: "Lingála" },
  { code: "bm", label: "Bamanankan" },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language || "en";

  return (
    <Select
      value={current}
      onValueChange={(val) => i18n.changeLanguage(val)}
    >
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder={t("nav.language")} />
      </SelectTrigger>
      <SelectContent className="max-h-80">
        {LANGUAGES.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
