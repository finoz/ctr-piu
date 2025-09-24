// Usa le API globali di WordPress
const { useBlockProps } = wp.blockEditor;

import type { ProfessionalBlockProps } from './types';

export default function Save({ attributes }: ProfessionalBlockProps) {
    const { avatar, name, role, ctaText, ctaUrl } = attributes;
    const blockProps = useBlockProps.save({
        className: 'professional-card'
    });

    // Non renderizza nulla se non ci sono dati essenziali
    if (!name && !role && !avatar.url) {
        return null;
    }

    return (
        <div {...blockProps}>
            {avatar.url && (
                <div className="professional-card__avatar">
                    <img 
                        src={avatar.url} 
                        alt={avatar.alt || name || 'Professional avatar'}
                        className="professional-card__image"
                    />
                </div>
            )}
            
            <div className="professional-card__content">
                {name && (
                    <h3 className="professional-card__name">
                        {name}
                    </h3>
                )}
                
                {role && (
                    <p className="professional-card__role">
                        {role}
                    </p>
                )}
                
                {ctaText && ctaUrl && (
                    <div className="professional-card__cta">
                        <a 
                            href={ctaUrl}
                            className="professional-card__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {ctaText}
                        </a>
                    </div>
                )}
                
                {ctaText && !ctaUrl && (
                    <div className="professional-card__cta">
                        <span className="professional-card__link professional-card__link--disabled">
                            {ctaText}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}