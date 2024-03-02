import React, { useContext } from 'react';
import { Container, interfaces } from 'inversify';
import { InversifyContext } from '../inversifyProvider';

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
    const { container } = useContext(InversifyContext);
    if (!container) { throw new Error(); }
    return container.get<T>(identifier);
};

export function setInjection<T>(token:interfaces.ServiceIdentifier<T>,  constructor: interfaces.Newable<T>) {
    const { container } = useContext(InversifyContext);
    if (!container) { throw new Error(); }
    return container.bind<T>(token).to(constructor);
};