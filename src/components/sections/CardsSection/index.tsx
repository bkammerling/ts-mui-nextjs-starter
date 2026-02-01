import * as React from 'react';
import type * as types from 'types';
import { Button } from '../../atoms/Button';
import { Markdown } from '../../atoms/Markdown';

export type Props = types.CardsSection & types.StackbitFieldPath;

export const CardsSection: React.FC<Props> = (props) => {
    const { title, subtitle, items = [], 'data-sb-field-path': fieldPath } = props;
    return (
        <section className="py-6 sm:py-10" data-sb-field-path={fieldPath}>
            {title && (
                <h2 className="text-2xl text-center font-bold" data-sb-field-path=".title">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p className={`text-lg text-center ${!!title ? 'mt-1' : ''}`} data-sb-field-path=".subtitle">
                    {subtitle}
                </p>
            )}
            {items.length > 0 && (
                <div className={`grid gap-4 ${!!(title || subtitle) ? 'pt-6' : ''} md:grid-cols-3`} data-sb-field-path=".items">
                    {items.map((item, index) => (
                        <CardsSectionItem key={index} {...item} titleTag={title ? 'h3' : 'h2'} data-sb-field-path={`.${index}`} />
                    ))}
                </div>
            )}
        </section>
    );
};

const CardsSectionItem: React.FC<types.Card & types.StackbitFieldPath & { titleTag?: 'h3' | 'h2' }> = (props) => {
    const { title, text, image, actions = [], titleTag = 'h3', 'data-sb-field-path': fieldPath } = props;
    return (
        <div data-sb-field-path={fieldPath} className="h-full border rounded-md overflow-hidden">
            {image?.url && (
                <img src={image.url} alt={image.altText} data-sb-field-path=".image .image.url#@src .image.altText#@alt" className="w-full h-auto" />
            )}
            {(title || text) && (
                <div className="p-4">
                    {title && (
                        (titleTag === 'h3' ? (
                            <h3 data-sb-field-path=".title" className="text-lg font-semibold">
                                {title}
                            </h3>
                        ) : (
                            <h2 data-sb-field-path=".title" className="text-lg font-semibold">
                                {title}
                            </h2>
                        ))
                    )}
                    {text && (
                        <div className="text-secondary">
                            <Markdown text={text} data-sb-field-path=".text" />
                        </div>
                    )}
                </div>
            )}
            {actions.length > 0 && (
                <div className="p-4" data-sb-field-path=".actions">
                    {actions.map((action, index) => (
                        <div key={index} className="inline-block mr-2 mb-2">
                            <Button {...action} data-sb-field-path={`.${index}`} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
