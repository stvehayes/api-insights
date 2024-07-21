import { Label, Breadcrumbs as PrimerBreadcrumbs } from '@primer/react';

export function Breadcrumbs({ items, noLabel }) {
  return (
    <PrimerBreadcrumbs
      sx={{
        mb: 3,
      }}
    >
      {items.map((item, index) => (
        <PrimerBreadcrumbs.Item
          key={index}
          href={item.href}
          selected={index === items.length - 1}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {item.text}
        </PrimerBreadcrumbs.Item>
      ))}
    </PrimerBreadcrumbs>
  );
}
