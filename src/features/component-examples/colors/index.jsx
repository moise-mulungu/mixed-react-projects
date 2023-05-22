import SelectColors from '@/ui/form/select/select-colors'

export default function Colors() {
  return (
    <div>
      <SelectColors
        colors={['red', 'green', 'blue', 'yellow', 'purple', 'orange']}
        legend={'Your color value'}
        initialColor={'green'}
      />
    </div>
  )
}
