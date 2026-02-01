import * as React from 'react';
import type * as types from 'types';
import { Button } from '../../atoms/Button';
import { Markdown } from '../../atoms/Markdown';

export type Props = types.HeroSection & types.StackbitFieldPath;

export const HeroSection: React.FC<Props> = (props) => {
    const { title, subtitle, text, image, actions = [], 'data-sb-field-path': fieldPath } = props;
    const hasTextContent = !!title || !!subtitle || !!text || actions.length > 0;

    return (
        <section className="py-6 sm:py-10" data-sb-field-path={fieldPath}>
            <div className="grid gap-4 md:grid-cols-2">
                {hasTextContent && (
                    <div className="">
                        {title && (
                            <h1 className="text-2xl font-bold text-primary" data-sb-field-path=".title">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className={`text-lg text-primary ${!!title ? 'mt-1' : ''}`} data-sb-field-path=".subtitle">
                                {subtitle}
                            </p>
                        )}
                        {text && (
                            <div className="text-secondary max-w-prose">
                                <Markdown text={text} data-sb-field-path=".text" />
                            </div>
                        )}
                        {actions.length > 0 && (
                            <div className={`${!!(title || subtitle || text) ? 'mt-4' : ''} flex flex-wrap items-center`} data-sb-field-path=".actions">
                                {actions.map((action, index) => (
                                    <div key={index} className="mr-2 mb-2" data-sb-field-path={`.${index}`}>
                                        <Button {...action} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                {image?.url && (
                    <div className="">
                        <img
                            className="w-full h-auto"
                            alt={image?.altText}
                            src={image?.url}
                            data-sb-field-path=".image .image.url#@src .image.altText#@alt"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};
