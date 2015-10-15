describe('Collection: Slots', function () {

  it('slots are available in the collection', function () {
    expect(Slots.find().count()).toBe(13);
  });

});
